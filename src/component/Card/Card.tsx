import React, { ReactNode } from 'react';
import './Card.scss';

interface cardProps {
  className?: string;
  children?: ReactNode;
}

const Card = ({ className = 'card', children = undefined }: cardProps) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export default Card;
