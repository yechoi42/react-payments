import React from 'react';
import Card from '../Card/Card';
import CardInner from '../CardInner/CardInner';
import AddCardSection from '../AddCardSection/AddCardSection';
import ICard from '../Card/ICard';
import dummyData from './dummyData.json';
import './CardList.scss';

const CardList = () => {
  const rawCards = dummyData;

  if (!rawCards) {
    return <></>;
  }

  const cardComponents = rawCards['cards'].map((x: ICard) => Card({ children: <CardInner cardInfo={x} /> }));
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
