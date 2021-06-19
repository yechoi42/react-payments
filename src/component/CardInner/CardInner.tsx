import React, { useState } from 'react';
import ICard from '../Card/ICard';
import './CardInner.scss';

interface cardInnerProps {
  cardInfo?: ICard;
}

const defaultCardInfo: ICard = {
  cardCompany: '',
  name: '',
  cardNum1: '',
  cardNum2: '',
  cardNum3: '',
  cardNum4: '',
  password: '',
  cvc: '',
  expireMonth: '',
  expireYear: '',
};

const CardInner = ({ cardInfo = defaultCardInfo }: cardInnerProps) => {
  const [cardCompany] = useState(cardInfo.cardCompany);
  const [name] = useState(cardInfo.name);
  const [cardNum1] = useState(cardInfo.cardNum1);
  const [cardNum2] = useState(cardInfo.cardNum2);
  const [cardNum3] = useState(cardInfo.cardNum3);
  const [cardNum4] = useState(cardInfo.cardNum4);
  const [expireMonth] = useState(cardInfo.expireMonth);
  const [expireYear] = useState(cardInfo.expireYear);

  return (
    <>
      <div className="card-inner">
        <div className="card-company">{cardCompany}</div>
        <div className="card-ic-chip"></div>
        <div className="card-number">
          <span className="card-number-segment">{cardNum1}</span>
          <span>- </span>
          <span className="card-number-segment">{cardNum2}</span>
          <span>- </span>
          <span className="card-number-segment">{cardNum3}</span>
          <span>- </span>
          <span className="card-number-segment">{cardNum4}</span>
        </div>
        <div className="card-footer">
          <span className="card-name">{name}</span>
          <span className="card-expiry-date">
            {expireMonth} / {expireYear}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardInner;
