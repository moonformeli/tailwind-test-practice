'use client';

import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import {
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

interface ModalProps extends PropsWithChildren {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({
  className,
  isOpen,
  children,
  onClose,
}: ModalProps) {
  const [dom, setDom] = useState<HTMLElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (document) {
      const modalContainer = document.getElementById('modal-container');

      if (modalContainer) {
        setDom(modalContainer);
      }
    }
  }, []);

  const handleClickBackground: MouseEventHandler<HTMLDivElement> = (e) => {
    const { id } = e.target as HTMLDivElement;

    if (id === 'modal-portal') {
      onClose();
    }
  };

  if (!isOpen || !dom) {
    return null;
  }

  return createPortal(
    <div
      id="modal-portal"
      style={{ background: 'rgba(0,0,0,0.2)' }}
      className={twMerge('fixed left-0 top-0 h-full w-full p-10', className)}
      onClickCapture={handleClickBackground}
    >
      {children}
    </div>,
    dom,
  );
}
