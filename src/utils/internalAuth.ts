import { NextRequest, NextResponse } from 'next/server';

/**
 * Bearer check for the `/api/internal/*` routes.
 *
 * These exist so the Claude routine running in the cloud can reach things it
 * has no local copy of — the Telegram bot token, and the narrative history that
 * lives in the gitignored `community/` folder. The routine holds
 * INTERNAL_API_SECRET; the credentials it guards never leave Vercel.
 *
 * Returns a response to send when the request is not authorised, else null.
 */
export function requireInternalSecret(request: NextRequest): NextResponse | null {
  const secret = process.env.INTERNAL_API_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'INTERNAL_API_SECRET is not configured' }, { status: 500 });
  }
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
