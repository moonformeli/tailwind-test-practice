import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

const kakaoProvider = KakaoProvider({
  clientId: process.env.KAKAO_CLIENT_ID || '',
  clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
});

const credentialsProvider = CredentialsProvider({
  name: 'credentials',
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials, req) {
    const user = { id: '1', name: 'test', email: 'test@example.com' };
    console.log('들어옴?', credentials);

    if (!credentials) {
      return null;
    }

    if (credentials.username === 'test' && credentials.password === '1234') {
      console.log('성공');
      return user;
    }

    return null;
  },
});

export const authOptions: AuthOptions = {
  providers: [kakaoProvider],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      console.log('in jwt', token, account, profile);
      // if (account) {
      //   token.accessToken = account.access_token;
      //   token.id = profile.id;
      // }

      if (account) {
        token.accessToken = '123';
      }

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;

      console.log('세션 session', session);
      console.log('세션 token', token);
      console.log('세션 user', user);

      // if (session.user) {
      //   session.user.accessToken =
      // }

      return session;
    },
  },
  secret: '123',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
