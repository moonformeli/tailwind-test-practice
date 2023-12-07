import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing plan!!',
  description: 'Generated by create next app',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="p-10">{children}</section>;
}
