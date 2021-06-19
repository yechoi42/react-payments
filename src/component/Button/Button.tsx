import React, { ReactNode } from 'react';

interface buttonProps {
  className?: string;
  onClick?: any;
  children?: ReactNode;
}

const Button = ({ className = 'button', onClick, children }: buttonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
