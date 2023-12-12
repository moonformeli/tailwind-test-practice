'use client';

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import type { PropsWithChildren } from 'react';

interface AuthGuardProps extends PropsWithChildren {
  session: Session | null;
}

export default function AuthGuard({ children, session }: AuthGuardProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
