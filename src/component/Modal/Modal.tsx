import React, { ReactNode } from 'react';
import Button from '../Button/Button';
import classNames from 'classnames/bind';
import './Modal.scss';

interface modalProps {
  open: boolean;
  onClickClose: React.MouseEventHandler<HTMLElement>;
  header?: ReactNode;
  children?: ReactNode;
}

const Modal = ({ open, onClickClose, header, children }: modalProps) => {
  return (
    <>
      <div className={classNames('modal', { openModal: open })}>
        {open ? (
          <section>
            <header>{header}</header>
            <main>{children}</main>
            <footer>
              <Button className="close" onClick={onClickClose}>
                V
              </Button>
            </footer>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
