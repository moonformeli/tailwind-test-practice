'use client';

import Image from 'next/image';
import Modal from './Modal';
import { signIn } from 'next-auth/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const handleLogin = () => {
    signIn('kakao');
  };

  return (
    <Modal
      className="flex items-center justify-center"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="relative flex w-1/2 flex-col justify-center rounded-lg bg-white px-6 py-12 lg:px-8">
        <button
          className="absolute right-9 top-12 opacity-80"
          onClick={onClose}
        >
          <Image src="/cancel.svg" width={16} height={16} alt="close" />
        </button>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/mark.svg"
            width={47}
            height={40}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mx-auto mt-10 flex items-center justify-center sm:mx-auto">
          <button
            style={{ color: 'rgba(0, 0, 0, 0.85)' }}
            className="bg-kakao-bg font-apple-sd flex items-center rounded-md px-7 py-[11px]"
            onClick={handleLogin}
          >
            <Image src="/kakao.svg" width={18} height={18} alt="" />
            <span className="px-16 text-[15px] font-semibold leading-[150%]">
              Login with Kakao
            </span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
