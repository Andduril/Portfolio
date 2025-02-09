import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Detect the device type
  const userAgent = request.headers.get('user-agent');

  console.log('User-Agent:', userAgent);

  let isMobile = false;

  if (userAgent) {
    isMobile = /Mobile/.test(userAgent);
  }

  const response = NextResponse.next();

  if (isMobile) {
    response.cookies.set('device', 'mobile');
  } else {
    response.cookies.set('device', 'desktop');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
