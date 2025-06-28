import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile/i.test(userAgent);

  const res = NextResponse.next();
  // res.cookies.set('device', isMobile ? 'mobile' : 'desktop');
  res.cookies.set('device', 'mobile'); // TODO: Remove this line when desktop is ready
  return res;
}
