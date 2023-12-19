import { useEffect, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(`isOpen in useModal: ${isOpen}`);
  }, [isOpen]);

  const openModal = () => {
    console.log('openModal');
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log('closeModal');
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};
