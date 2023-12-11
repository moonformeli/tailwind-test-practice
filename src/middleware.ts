import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get('user_id');
  const url = request.nextUrl.clone();

  // 이미지 파일인지 확인
  if (url.pathname.includes('svg')) {
    return NextResponse.next();
  }

  if (!cookie) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|pricing).*)'],
};
