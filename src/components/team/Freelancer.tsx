import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function Freelancer() {
  return (
    <div
      className={twMerge(
        'group relative flex flex-col items-center justify-center gap-6 rounded-2xl border-[1px] border-solid border-gray-300 px-8 py-10',
        'hover:cursor-pointer hover:bg-gray-800',
      )}
    >
      <Image
        className="rounded-full"
        src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        width={224}
        height={224}
        alt=""
      />
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <p
            className={twMerge(
              'text-base font-semibold leading-7 tracking-tight text-black',
              'group-hover:text-white',
            )}
          >
            Leonard Krasner
          </p>
          <p className="text-sm leading-6 text-gray-400">Senior Designer</p>
        </div>
        <ul className="flex items-center justify-center gap-6">
          <li title="twitter">
            <Link className="hover:brightness-[2.5]" href="/team">
              <Image src="/twitter.svg" width={20} height={20} alt="twitter" />
            </Link>
          </li>
          <li title="linkedin">
            <Link className="hover:brightness-[2.5]" href="/team">
              <Image
                src="/linkedin.svg"
                width={20}
                height={20}
                alt="linkedin"
              />
            </Link>
          </li>
          <li title={`Chat with Leonard Krasner`}>
            <Link className="hover:brightness-[2.5]" href="/team">
              <Image src="/chat.svg" width={20} height={20} alt="chat" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
