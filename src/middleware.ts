import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get('user_id');
  const url = request.nextUrl.clone();

  if (!cookie) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|pricing).*)'],
};
