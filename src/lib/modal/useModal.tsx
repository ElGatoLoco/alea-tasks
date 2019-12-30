import React, { ComponentProps, FC, useState } from 'react';

import Modal from './Modal';

interface UseModal {
  ModalBody: FC<ComponentProps<FC>>;
  close: () => void;
}
export const useModal = (trigger: JSX.Element): UseModal => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const ModalBody = ({ children }: ComponentProps<FC>): JSX.Element => {
    if (!isOpen) {
      return { ...trigger, props: { ...trigger.props, onClick: open } };
    }
    return <Modal>{children}</Modal>;
  };
  return { ModalBody, close };
};
