import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const credentialsProvider = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials, req) {
    const user = { id: '1', name: 'test', email: 'test@example.com' };

    if (!credentials) {
      return null;
    }

    if (credentials.username === 'test' && credentials.password === '1234') {
      return user;
    }

    return null;
  },
});

const handler = NextAuth({
  providers: [credentialsProvider],
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
