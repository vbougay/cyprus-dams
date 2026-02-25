import { NextRequest, NextResponse } from 'next/server';
import { getApiRegions, isValidDataset } from '@/utils/dataApi';
import { ApiErrorResponse } from '@/types/api';

const CACHE_HEADERS = {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  'Access-Control-Allow-Origin': '*',
};

export async function GET(request: NextRequest) {
  const datasetId = request.nextUrl.searchParams.get('dataset') ?? undefined;

  if (datasetId && !isValidDataset(datasetId)) {
    const error: ApiErrorResponse = {
      error: `Invalid dataset ID: '${datasetId}'. Use /api/v1/datasets/ to see available datasets.`,
      status: 400,
    };
    return NextResponse.json(error, { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  const data = getApiRegions(datasetId);
  return NextResponse.json(data, { headers: CACHE_HEADERS });
}
