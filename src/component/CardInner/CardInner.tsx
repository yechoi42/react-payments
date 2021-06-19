import React from 'react';
import './CardInner.scss';

export interface cardInnerProps {
  cardCompany: string;
  name: string;
  cardNum1: string;
  cardNum2: string;
  cardNum3: string;
  cardNum4: string;
  password: string;
  cvc: string;
  expireMonth: string;
  expireYear: string;
}

export const defaultCardInfo: cardInnerProps = {
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

const CardInner = (cardInfo: cardInnerProps = defaultCardInfo) => {
  return (
    <>
      <div className="card-inner">
        <div className="card-company">{cardInfo.cardCompany ? cardInfo.cardCompany : 'CARD'}</div>
        <div className="card-ic-chip"></div>
        <div className="card-number">
          <span className="card-number-segment">{cardInfo.cardNum1 ? cardInfo.cardNum1 : '____'}</span>
          <span>- </span>
          <span className="card-number-segment">{cardInfo.cardNum2 ? cardInfo.cardNum2 : '____'}</span>
          <span>- </span>
          <span className="card-number-segment">{cardInfo.cardNum3 ? cardInfo.cardNum3 : '____'}</span>
          <span>- </span>
          <span className="card-number-segment">{cardInfo.cardNum4 ? cardInfo.cardNum4 : '____'}</span>
        </div>
        <div className="card-footer">
          <span className="card-name">{cardInfo.name ? cardInfo.name : 'NAME'}</span>
          <span className="card-expiry-date">
            {cardInfo.expireMonth ? cardInfo.expireMonth : 'MM'} / {cardInfo.expireYear ? cardInfo.expireYear : 'YY'}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardInner;
