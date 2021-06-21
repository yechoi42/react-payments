import React, { ReactNode } from 'react';
import './Button.scss';

interface buttonProps {
  className?: string;
  onClick?: any;
  children?: ReactNode;
}

const Button = ({ className = 'Button', onClick, children }: buttonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
