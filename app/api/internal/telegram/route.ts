import { NextRequest, NextResponse } from 'next/server';
import { requireInternalSecret } from '@/utils/internalAuth';
import { getReportDate } from '@/utils/dataManager';

export const dynamic = 'force-dynamic';

/**
 * Sends a community post to Telegram on behalf of the cloud routine.
 *
 * Server-side twin of `scripts/post-telegram.ts` (which is gitignored, so a
 * cloud checkout doesn't have it). The bot token stays in Vercel's env — the
 * routine only ever holds INTERNAL_API_SECRET.
 *
 * The post goes out as a photo + caption: the site's dashboard OG card (cache-
 * busted by the deployed dataset's report date) as the image, the post body as
 * the caption. Bodies over Telegram's 1024-char caption cap fall back to
 * card + title, then the full text as a second message.
 *
 * The target chat is always TELEGRAM_CHAT_ID: no per-request override, so a
 * leaked secret can't be pointed at another chat. Likewise the photo is always
 * an image on this site — callers may only pick the path, not the host.
 */

const TELEGRAM_MAX_CHARS = 4096;
const TELEGRAM_MAX_CAPTION = 1024;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fragmata.info';

interface TelegramSendResponse {
  ok: boolean;
  result?: { message_id: number; chat: { id: number }; date: number };
  description?: string;
}

export async function POST(request: NextRequest) {
  const denied = requireInternalSecret(request);
  if (denied) return denied;

  let payload: { text?: unknown; dryRun?: unknown; photo?: unknown; noPhoto?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Body must be JSON' }, { status: 400 });
  }

  const text = typeof payload.text === 'string' ? payload.text.trim() : '';
  if (!text) {
    return NextResponse.json({ error: 'Missing "text"' }, { status: 400 });
  }
  if (text.length > TELEGRAM_MAX_CHARS) {
    return NextResponse.json(
      { error: `Post exceeds Telegram's ${TELEGRAM_MAX_CHARS}-char limit (${text.length})` },
      { status: 422 },
    );
  }

  // Callers may pass a site-relative path (e.g. "/og/dam/kouris.en.png"); the
  // host and the cache-busting version are always ours.
  let photo: string | null = null;
  if (payload.noPhoto !== true) {
    const requested = typeof payload.photo === 'string' ? payload.photo.trim() : '';
    if (requested && !requested.startsWith('/')) {
      return NextResponse.json(
        { error: '"photo" must be a site-relative path starting with "/"' },
        { status: 400 },
      );
    }
    const path = requested || '/og/dashboard.en.png';
    photo = `${SITE_URL}${path}${path.includes('?') ? '&' : '?'}v=${getReportDate()}`;
  }

  if (payload.dryRun === true) {
    return NextResponse.json({ ok: true, dryRun: true, length: text.length, photo });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json(
      { error: 'TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not configured' },
      { status: 500 },
    );
  }

  const send = async (method: string, extra: Record<string, unknown>) => {
    let res: Response;
    try {
      res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, ...extra }),
        signal: AbortSignal.timeout(20_000),
      });
    } catch (err) {
      return {
        error: NextResponse.json(
          { error: `Telegram request failed: ${err instanceof Error ? err.message : String(err)}` },
          { status: 502 },
        ),
      };
    }
    const body = (await res.json()) as TelegramSendResponse;
    if (!res.ok || !body.ok || !body.result) {
      // Surface Telegram's own description; never echo the token.
      return {
        error: NextResponse.json(
          { error: `Telegram API error ${res.status}`, description: body.description ?? null },
          { status: 502 },
        ),
      };
    }
    return { result: body.result };
  };

  const sendMessagePayload = { text, disable_web_page_preview: true };
  const first = photo
    ? text.length <= TELEGRAM_MAX_CAPTION
      ? await send('sendPhoto', { photo, caption: text })
      : // Too long for a caption: the card carries the title line, body follows.
        await send('sendPhoto', { photo, caption: `${text.split('\n')[0]}\n\n🔗 ${SITE_URL}` })
    : await send('sendMessage', sendMessagePayload);
  if (first.error) return first.error;

  let followUpId: number | null = null;
  if (photo && text.length > TELEGRAM_MAX_CAPTION) {
    const second = await send('sendMessage', sendMessagePayload);
    if (second.error) return second.error;
    followUpId = second.result!.message_id;
  }

  return NextResponse.json({
    ok: true,
    messageId: first.result!.message_id,
    followUpMessageId: followUpId,
    chatId: first.result!.chat.id,
    sentAt: new Date(first.result!.date * 1000).toISOString().replace(/\.\d{3}Z$/, 'Z'),
    length: text.length,
    photo,
  });
}
