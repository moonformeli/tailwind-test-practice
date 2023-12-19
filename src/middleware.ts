import { getToken, type JWT } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const validateToken = (token: JWT | null) => {
  if (!token) {
    return false;
  }

  const now = Date.now();
  const exp = token.exp as number | undefined;

  if (!exp) {
    return false;
  }

  return now <= exp;
};

export const middleware = async (request: NextRequest) => {
  const cookie = request.cookies.get('user_id');
  const url = request.nextUrl.clone();

  const token = await getToken({
    req: request,
    secret: process.env.KAKAO_CLIENT_SECRET,
  });

  // 토큰이 없거나 유효하지 않은 경우
  // if (!validateToken(token)) {
  //   url.pathname = '/login';
  //   return NextResponse.redirect(url);
  // }

  // 이미지 파일인지 확인
  if (url.pathname.includes('svg')) {
    return NextResponse.next();
  }

  // if (!cookie) {
  //   url.pathname = '/login';
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|pricing).*)'],
};
