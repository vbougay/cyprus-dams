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
 * The post goes out as a photo + caption: an OG card as the image, the post
 * body as the caption. Bodies over Telegram's 1024-char caption cap fall back
 * to card + title, then the full text as a second message.
 *
 * Two ways to supply the card:
 *   - JSON body — the card is fetched from this site by URL. Only sound once
 *     the new dataset is deployed, since the cards are static build output.
 *   - multipart/form-data with a `photo` file — the card is uploaded with the
 *     request. This is what cloud runs use: they render the new dataset's card
 *     locally with `pnpm og` and post it *before* the commit is pushed, so the
 *     image matches the text rather than trailing a deploy behind it.
 *
 * The target chat is always TELEGRAM_CHAT_ID: no per-request override, so a
 * leaked secret can't be pointed at another chat. A URL photo is always an
 * image on this site — callers may only pick the path, not the host.
 */

const TELEGRAM_MAX_CHARS = 4096;
const TELEGRAM_MAX_CAPTION = 1024;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fragmata.info';
// Telegram accepts 10MB uploads; Vercel caps request bodies well below that,
// and an OG card is ~120KB. This bound exists to reject an obvious mistake.
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const ALLOWED_UPLOAD_TYPES = ['image/png', 'image/jpeg'];

interface TelegramSendResponse {
  ok: boolean;
  result?: { message_id: number; chat: { id: number }; date: number };
  description?: string;
}

/** The card to attach: fetched by URL, uploaded inline, or omitted. */
type Photo = { kind: 'url'; url: string } | { kind: 'file'; file: File } | null;

export async function POST(request: NextRequest) {
  const denied = requireInternalSecret(request);
  if (denied) return denied;

  const isMultipart = (request.headers.get('content-type') ?? '').startsWith('multipart/form-data');

  let text: string;
  let dryRun: boolean;
  let photo: Photo = null;

  if (isMultipart) {
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return NextResponse.json({ error: 'Malformed multipart body' }, { status: 400 });
    }

    text = (form.get('text') ?? '').toString().trim();
    dryRun = form.get('dryRun') === 'true';

    const upload = form.get('photo');
    if (form.get('noPhoto') === 'true') {
      photo = null;
    } else if (upload instanceof File) {
      if (!ALLOWED_UPLOAD_TYPES.includes(upload.type)) {
        return NextResponse.json(
          { error: `"photo" must be one of ${ALLOWED_UPLOAD_TYPES.join(', ')} (got ${upload.type || 'no type'})` },
          { status: 400 },
        );
      }
      if (upload.size === 0 || upload.size > MAX_UPLOAD_BYTES) {
        return NextResponse.json(
          { error: `"photo" must be between 1 byte and ${MAX_UPLOAD_BYTES} bytes (got ${upload.size})` },
          { status: 400 },
        );
      }
      photo = { kind: 'file', file: upload };
    } else {
      return NextResponse.json(
        { error: 'multipart body needs a "photo" file, or noPhoto=true' },
        { status: 400 },
      );
    }
  } else {
    let payload: { text?: unknown; dryRun?: unknown; photo?: unknown; noPhoto?: unknown };
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ error: 'Body must be JSON or multipart/form-data' }, { status: 400 });
    }

    text = typeof payload.text === 'string' ? payload.text.trim() : '';
    dryRun = payload.dryRun === true;

    // Callers may pass a site-relative path (e.g. "/og/dam/kouris.en.png"); the
    // host and the cache-busting version are always ours.
    if (payload.noPhoto !== true) {
      const requested = typeof payload.photo === 'string' ? payload.photo.trim() : '';
      if (requested && !requested.startsWith('/')) {
        return NextResponse.json(
          { error: '"photo" must be a site-relative path starting with "/"' },
          { status: 400 },
        );
      }
      const path = requested || '/og/dashboard.en.png';
      photo = {
        kind: 'url',
        url: `${SITE_URL}${path}${path.includes('?') ? '&' : '?'}v=${getReportDate()}`,
      };
    }
  }

  if (!text) {
    return NextResponse.json({ error: 'Missing "text"' }, { status: 400 });
  }
  if (text.length > TELEGRAM_MAX_CHARS) {
    return NextResponse.json(
      { error: `Post exceeds Telegram's ${TELEGRAM_MAX_CHARS}-char limit (${text.length})` },
      { status: 422 },
    );
  }

  const photoLabel =
    photo === null
      ? null
      : photo.kind === 'url'
        ? photo.url
        : `upload:${photo.file.name || 'photo.png'} (${photo.file.size} bytes)`;

  if (dryRun) {
    return NextResponse.json({ ok: true, dryRun: true, length: text.length, photo: photoLabel });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json(
      { error: 'TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not configured' },
      { status: 500 },
    );
  }

  const send = async (method: string, extra: Record<string, unknown>, upload?: File) => {
    // A file photo has to go as multipart; everything else is plain JSON.
    let init: RequestInit;
    if (upload) {
      const form = new FormData();
      form.set('chat_id', chatId);
      for (const [key, value] of Object.entries(extra)) form.set(key, String(value));
      form.set('photo', upload, upload.name || 'card.png');
      init = { method: 'POST', body: form };
    } else {
      init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, ...extra }),
      };
    }

    let res: Response;
    try {
      res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
        ...init,
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
  // Too long for a caption: the card carries the title line, the body follows.
  const caption =
    text.length <= TELEGRAM_MAX_CAPTION ? text : `${text.split('\n')[0]}\n\n🔗 ${SITE_URL}`;
  const sendCard = () =>
    photo!.kind === 'url'
      ? send('sendPhoto', { photo: (photo as { url: string }).url, caption })
      : send('sendPhoto', { caption }, (photo as { file: File }).file);

  const first = photo ? await sendCard() : await send('sendMessage', sendMessagePayload);
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
    photo: photoLabel,
  });
}
