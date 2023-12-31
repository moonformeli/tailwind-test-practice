import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { Inter } from 'next/font/google';
import AuthGuard from './AuthGuard';
import './globals.css';
import Header from '@/components/Header';

import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body id="body" className={inter.className}>
        <AuthGuard session={session}>
          <Header />
          {children}
        </AuthGuard>
        <div id="modal-container" />
      </body>
    </html>
  );
}
