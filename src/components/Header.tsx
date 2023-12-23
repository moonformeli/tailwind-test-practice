import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <section className="flex items-center justify-between px-10 py-6">
      <div>
        <Link href="/" data-testid="test-logo">
          <Image src="/mark.svg" width={38} height={32} alt="Go Home" />
        </Link>
      </div>
      <ul className="flex list-none items-center justify-between gap-12 text-sm font-semibold leading-6">
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
      <div>
        <Link
          className="inline-flex items-center justify-center gap-1"
          href="/login"
        >
          <span className="text-sm font-semibold leading-6">Log in</span>
          <Image
            className="translate-y-[0.5px]"
            src="/right_arrow.svg"
            width={10}
            height={14}
            alt=""
          />
        </Link>
      </div>
    </section>
  );
}
