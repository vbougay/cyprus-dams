import { NextResponse } from 'next/server';
import { getApiDatasets } from '@/utils/dataApi';

const CACHE_HEADERS = {
  'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600',
  'Access-Control-Allow-Origin': '*',
};

export async function GET() {
  return NextResponse.json(getApiDatasets(), { headers: CACHE_HEADERS });
}
