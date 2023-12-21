import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { tokenAPI } from './api';
import type { Token } from './api/token';

export default withAuth(
  async function middleware(req) {
    const response = NextResponse.next();

    const token = req.nextauth.token as Token;

    if (token) {
      const isValid = await tokenAPI.validateToken(token);

      if (isValid) {
        return response;
      }
    }

    response.cookies.delete('next-auth.session-token');
    return response;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const url = req.nextUrl.clone();
        console.log(`url: ${url}`);

        return true;

        // 이미지 파일인지 확인
        if (url.pathname.includes('svg')) {
          return true;
        }

        return Boolean(token);
      },
    },
  },
);
