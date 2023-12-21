import { NextRequest, NextResponse } from 'next/server';
import { getToken, type JWT } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.KAKAO_CLIENT_SECRET,
  });

  console.log(`와? ${token}`);
  return NextResponse.json({ token });
}
