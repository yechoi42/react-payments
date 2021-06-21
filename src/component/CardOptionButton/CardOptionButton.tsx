import React from 'react';
import Button from '../Button/Button';
import classnames from 'classnames';
import './CardOptionButton.scss';

interface cardOptionButtonProps {
  cardName: string;
  onClick?: any;
}

const CardOptionButton = ({ cardName, onClick }: cardOptionButtonProps) => {
  return (
    <>
      <div className="card-option-button-container">
        <Button className={classnames('card-option-button', cardName)} onClick={onClick}></Button>
        <div className="card-name-container">{cardName}</div>
      </div>
    </>
  );
};

export default CardOptionButton;
