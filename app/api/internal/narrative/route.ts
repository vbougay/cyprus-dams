import { NextRequest, NextResponse } from 'next/server';
import {
  availableDataSets,
  ensureDatasetLoaded,
  getReportDate,
  getSummaryChanges,
} from '@/utils/dataManager';
import { parseDateToken } from '@/utils/wddDates';
import { requireInternalSecret } from '@/utils/internalAuth';

export const dynamic = 'force-dynamic';

/**
 * Narrative context for the cloud routine.
 *
 * Locally the update skill reads `community/TELEGRAM.md` to see where the story
 * currently stands before writing a new summary or post. That folder is
 * gitignored, so a cloud checkout has no history at all — this endpoint gives
 * the same continuity from data that *is* committed: the recent datasets'
 * `getSummaryChanges` narratives, in all three languages, newest first.
 *
 * `daysSinceLatest` is what the skill's major/minor post rule keys off (a gap of
 * more than a day means a major update).
 */

const DEFAULT_LIMIT = 6;
const MAX_LIMIT = 20;

export async function GET(request: NextRequest) {
  const denied = requireInternalSecret(request);
  if (denied) return denied;

  const requested = Number(request.nextUrl.searchParams.get('limit'));
  const limit = Number.isInteger(requested) && requested > 0
    ? Math.min(requested, MAX_LIMIT)
    : DEFAULT_LIMIT;

  const recent = availableDataSets.slice(0, limit);
  // Only the newest dataset is statically imported; the rest load on demand.
  await Promise.all(recent.map((ds) => ensureDatasetLoaded(ds.id)));

  const latestId = availableDataSets[0].id;
  const latestDate = parseDateToken(latestId);

  return NextResponse.json({
    latest: latestId,
    latestReportDate: getReportDate(latestId),
    daysSinceLatest: latestDate
      ? Math.floor((Date.now() - latestDate.epoch) / 86_400_000)
      : null,
    updates: recent.map((ds) => ({
      id: ds.id,
      label: ds.label,
      reportDate: getReportDate(ds.id),
      summaries: {
        en: getSummaryChanges('en', ds.id),
        el: getSummaryChanges('el', ds.id),
        ru: getSummaryChanges('ru', ds.id),
      },
    })),
  });
}
