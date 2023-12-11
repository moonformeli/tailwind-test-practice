'use client';

import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

interface AuthGuardProps extends PropsWithChildren {}

export default function AuthGuard({ children }: AuthGuardProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
