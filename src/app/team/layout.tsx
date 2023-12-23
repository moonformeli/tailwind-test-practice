import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find your team!',
  description: 'Generated by create next app',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex flex-col gap-20 p-10">{children}</section>;
}