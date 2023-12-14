import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: ISODateString;
    accessToken?: string | null;
    refreshToken?: string | null;
  }
}
