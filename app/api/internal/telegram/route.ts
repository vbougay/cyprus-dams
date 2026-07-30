import { NextRequest, NextResponse } from 'next/server';
import { requireInternalSecret } from '@/utils/internalAuth';

export const dynamic = 'force-dynamic';

/**
 * Sends a community post to Telegram on behalf of the cloud routine.
 *
 * Server-side twin of `scripts/post-telegram.ts` (which is gitignored, so a
 * cloud checkout doesn't have it). The bot token stays in Vercel's env — the
 * routine only ever holds INTERNAL_API_SECRET.
 *
 * The target chat is always TELEGRAM_CHAT_ID: no per-request override, so a
 * leaked secret can't be pointed at another chat.
 */

const TELEGRAM_MAX_CHARS = 4096;

interface TelegramSendResponse {
  ok: boolean;
  result?: { message_id: number; chat: { id: number }; date: number };
  description?: string;
}

export async function POST(request: NextRequest) {
  const denied = requireInternalSecret(request);
  if (denied) return denied;

  let payload: { text?: unknown; dryRun?: unknown };
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

  if (payload.dryRun === true) {
    return NextResponse.json({ ok: true, dryRun: true, length: text.length });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json(
      { error: 'TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not configured' },
      { status: 500 },
    );
  }

  let res: Response;
  try {
    res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(20_000),
    });
  } catch (err) {
    return NextResponse.json(
      { error: `Telegram request failed: ${err instanceof Error ? err.message : String(err)}` },
      { status: 502 },
    );
  }

  const body = (await res.json()) as TelegramSendResponse;
  if (!res.ok || !body.ok || !body.result) {
    // Surface Telegram's own description; never echo the token.
    return NextResponse.json(
      { error: `Telegram API error ${res.status}`, description: body.description ?? null },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    messageId: body.result.message_id,
    chatId: body.result.chat.id,
    sentAt: new Date(body.result.date * 1000).toISOString().replace(/\.\d{3}Z$/, 'Z'),
    length: text.length,
  });
}
