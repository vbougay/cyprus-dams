import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/utils/locale';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths, static files, and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like favicon.ico, og-image.png
  ) {
    return;
  }

  // Check if the path starts with a locale prefix
  const segments = pathname.split('/');
  const maybeLocale = segments[1];

  // If path starts with /en/, redirect to strip the prefix (308 permanent)
  if (maybeLocale === defaultLocale) {
    const newPath = '/' + segments.slice(2).join('/');
    const url = request.nextUrl.clone();
    url.pathname = newPath || '/';
    return NextResponse.redirect(url, 308);
  }

  // If path starts with a non-default locale, pass through
  if (locales.includes(maybeLocale as any) && maybeLocale !== defaultLocale) {
    const response = NextResponse.next();
    response.headers.set('Content-Language', maybeLocale);
    return response;
  }

  // No locale prefix → rewrite to /en/... internally
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set('Content-Language', defaultLocale);
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
