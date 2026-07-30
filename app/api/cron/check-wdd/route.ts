import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_DATASET_ID } from '@/utils/dataManager';
import { newestWddDate, parseDateToken } from '@/utils/wddDates';

// Vercel Cron invokes this with GET; it must never be prerendered or cached.
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

/**
 * Watches the WDD reservoir pages for a bulletin newer than the one this build
 * ships, and fires the "Fragmata data update" Claude routine when it finds one.
 * This is the cloud replacement for `scripts/watch-wdd.sh` — same comparison,
 * no laptop. All the agent work happens in the routine, not here.
 *
 * Schedule lives in `vercel.json`. See CLOUD-AUTOMATION.md for the runbook.
 */

// Both pages are checked: the Greek one is sometimes updated first.
const WDD_PAGES = [
  'https://www.gov.cy/moa-wdd/en/documents/dams-and-off-stream-ponds/reservoir-storage/',
  'https://www.gov.cy/moa-wdd/documents/tamieytires-neroy-fragmata-ydatodexamenes/plirotita-fragmaton/',
];

// gov.cy answers 403 without a browser User-Agent.
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';

// The routine pushes straight to main, so main is the authority on "already done".
const REPO_DATA_MANAGER =
  'https://raw.githubusercontent.com/vbougay/fragmata.info/main/src/utils/dataManager.ts';

const FIRE_BETA_HEADER = 'experimental-cc-routine-2026-04-01';

type Action =
  | 'fired'
  | 'no-new-data'
  | 'already-pushed'
  | 'push-guard-unavailable'
  | 'dry-run';

async function fetchPage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, Accept: 'text/html' },
      signal: AbortSignal.timeout(20_000),
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

/**
 * Has a run for this bulletin already landed on main?
 *
 * A routine run takes ~10-20 minutes and pushes at the end, and Vercel needs a
 * few more to rebuild — so for a while after the push the *deployed* build still
 * reports the old dataset. Checking main closes that window.
 *
 * Returns null when GitHub can't be reached, which the caller treats as "don't
 * fire": a delayed update costs one cron tick, a duplicate run costs a duplicate
 * Telegram post.
 */
async function mainHasDataset(datasetId: string): Promise<boolean | null> {
  try {
    const res = await fetch(REPO_DATA_MANAGER, {
      signal: AbortSignal.timeout(15_000),
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return (await res.text()).includes(`'${datasetId}'`);
  } catch {
    return null;
  }
}

async function fireRoutine(detected: string, appLatest: string) {
  const routineId = process.env.CLAUDE_ROUTINE_ID;
  const token = process.env.CLAUDE_ROUTINE_TOKEN;
  if (!routineId || !token) {
    throw new Error('CLAUDE_ROUTINE_ID / CLAUDE_ROUTINE_TOKEN are not configured');
  }

  // Freeform text; it reaches the routine wrapped in a <routine-fire-payload>
  // block marked untrusted, so the routine's saved prompt has to opt into
  // reading it. Facts only — no instructions.
  const text = [
    'Trigger: fragmata.info cron check of the gov.cy WDD reservoir pages.',
    `detected_bulletin_date: ${detected}`,
    `deployed_dataset: ${appLatest}`,
    `detected_at: ${new Date().toISOString()}`,
  ].join('\n');

  const res = await fetch(
    `https://api.anthropic.com/v1/claude_code/routines/${routineId}/fire`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'anthropic-beta': FIRE_BETA_HEADER,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
      signal: AbortSignal.timeout(30_000),
    },
  );

  const body = await res.text();
  if (!res.ok) {
    throw new Error(`Routine fire failed: ${res.status} ${body.slice(0, 500)}`);
  }
  return JSON.parse(body) as {
    claude_code_session_id?: string;
    claude_code_session_url?: string;
  };
}

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'CRON_SECRET is not configured' }, { status: 500 });
  }
  // Vercel sends this header automatically on cron invocations once CRON_SECRET is set.
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const force = request.nextUrl.searchParams.get('force') === '1';
  const dryRun = request.nextUrl.searchParams.get('dry') === '1';

  const pages = (await Promise.all(WDD_PAGES.map(fetchPage))).filter(
    (page): page is string => page !== null,
  );
  if (pages.length === 0) {
    return NextResponse.json(
      { error: 'Failed to fetch the gov.cy pages (EN and GR)' },
      { status: 502 },
    );
  }

  const wddLatest = newestWddDate(pages);
  if (!wddLatest) {
    return NextResponse.json(
      { error: 'No XLSX dates found on the gov.cy pages' },
      { status: 502 },
    );
  }

  const appLatest = parseDateToken(DEFAULT_DATASET_ID);
  if (!appLatest) {
    // Can't compare, so don't fire — an unreadable dataset id is a bug in the
    // build, not a reason to start a run on every tick.
    return NextResponse.json(
      { error: `Could not parse the deployed dataset id: ${DEFAULT_DATASET_ID}` },
      { status: 500 },
    );
  }

  const result = {
    checkedAt: new Date().toISOString(),
    pagesFetched: pages.length,
    deployedDataset: DEFAULT_DATASET_ID,
    wddLatest: wddLatest.id,
    action: 'no-new-data' as Action,
  };

  if (!force && wddLatest.epoch <= appLatest.epoch) {
    return NextResponse.json(result);
  }

  if (!force) {
    const alreadyPushed = await mainHasDataset(wddLatest.id);
    if (alreadyPushed === null) {
      return NextResponse.json({ ...result, action: 'push-guard-unavailable' });
    }
    if (alreadyPushed) {
      return NextResponse.json({ ...result, action: 'already-pushed' });
    }
  }

  if (dryRun) {
    return NextResponse.json({ ...result, action: 'dry-run' });
  }

  try {
    const session = await fireRoutine(wddLatest.id, DEFAULT_DATASET_ID);
    return NextResponse.json({
      ...result,
      action: 'fired',
      sessionId: session.claude_code_session_id,
      sessionUrl: session.claude_code_session_url,
    });
  } catch (err) {
    return NextResponse.json(
      { ...result, error: err instanceof Error ? err.message : String(err) },
      { status: 502 },
    );
  }
}
