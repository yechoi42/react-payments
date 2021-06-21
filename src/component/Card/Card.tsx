import React, { ReactNode } from 'react';
import classnames from 'classnames';
import './Card.scss';

interface cardProps {
  className?: string;
  children?: ReactNode;
}

const Card = ({ className = 'card', children = undefined }: cardProps) => {
  return (
    <>
      <div className={classnames('card', className)}>{children}</div>
    </>
  );
};

export default Card;
