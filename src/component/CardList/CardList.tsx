import React from 'react';
import Card from '../Card/Card';
import CardInner, { cardInnerProps } from '../CardInner/CardInner';
import AddCardSection from '../AddCardSection/AddCardSection';
import dummyData from './dummyData.json';
import './CardList.scss';

const CardList = () => {
  const rawCards = dummyData;

  if (!rawCards) {
    return <></>;
  }

  const cardComponents = rawCards['cards'].map((x: cardInnerProps) =>
    Card({ className: x.cardCompany, children: CardInner(x) }),
  );
  // const cardComponents = '';

  return (
    <>
      <div className="card-list">
        {cardComponents}
        <AddCardSection />
      </div>
    </>
  );
};

export default CardList;
