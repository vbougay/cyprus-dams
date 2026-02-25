import { NextRequest, NextResponse } from 'next/server';
import { getApiReservoirs, isValidDataset, isValidRegion, VALID_REGIONS } from '@/utils/dataApi';
import { ApiErrorResponse } from '@/types/api';

const CACHE_HEADERS = {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  'Access-Control-Allow-Origin': '*',
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const datasetId = searchParams.get('dataset') ?? undefined;
  const region = searchParams.get('region') ?? undefined;

  if (datasetId && !isValidDataset(datasetId)) {
    const error: ApiErrorResponse = {
      error: `Invalid dataset ID: '${datasetId}'. Use /api/v1/datasets/ to see available datasets.`,
      status: 400,
    };
    return NextResponse.json(error, { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  if (region && !isValidRegion(region)) {
    const error: ApiErrorResponse = {
      error: `Invalid region: '${region}'. Valid regions: ${VALID_REGIONS.join(', ')}`,
      status: 400,
    };
    return NextResponse.json(error, { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  const data = getApiReservoirs(datasetId, region);
  return NextResponse.json(data, { headers: CACHE_HEADERS });
}
