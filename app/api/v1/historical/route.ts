import { NextRequest, NextResponse } from 'next/server';
import { getApiHistorical } from '@/utils/dataApi';
import { ApiErrorResponse } from '@/types/api';

const CACHE_HEADERS = {
  'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
  'Access-Control-Allow-Origin': '*',
};

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const from = searchParams.get('from') ?? undefined;
  const to = searchParams.get('to') ?? undefined;
  const reservoir = searchParams.get('reservoir') ?? undefined;

  if (from && !DATE_REGEX.test(from)) {
    const error: ApiErrorResponse = {
      error: `Invalid 'from' date format: '${from}'. Use YYYY-MM-DD.`,
      status: 400,
    };
    return NextResponse.json(error, { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  if (to && !DATE_REGEX.test(to)) {
    const error: ApiErrorResponse = {
      error: `Invalid 'to' date format: '${to}'. Use YYYY-MM-DD.`,
      status: 400,
    };
    return NextResponse.json(error, { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  const data = getApiHistorical(from, to, reservoir);
  return NextResponse.json(data, { headers: CACHE_HEADERS });
}
