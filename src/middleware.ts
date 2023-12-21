import { withAuth } from 'next-auth/middleware';

import { tokenAPI } from './api';

export default withAuth(
  async function middleware(req) {
    console.log('middleware with withAuth', req.nextauth.token);

    await tokenAPI.validateToken();
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
