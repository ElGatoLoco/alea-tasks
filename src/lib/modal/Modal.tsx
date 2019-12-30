import React, { ComponentProps, FC, MutableRefObject, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, Overlay } from './styles';

type ElementRef = MutableRefObject<Element | null>;
const Modal: FC<ComponentProps<FC>> = ({ children }: ComponentProps<FC>) => {
  const elRef: ElementRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  let portalRoot = document.getElementById('modal');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'modal');
    document.body.appendChild(portalRoot);
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (modalRoot && elRef.current) {
      modalRoot.appendChild(elRef.current);
      return () => {
        return elRef.current && modalRoot.removeChild(elRef.current);
      };
    }

    return () => {};
  }, []);

  return createPortal(
    <Overlay>
      <ModalWrapper>{children}</ModalWrapper>
    </Overlay>,
    elRef.current,
  );
};

export default Modal;
