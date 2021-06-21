import React from 'react';
import Button from '../Button/Button';
import './BackButton.scss';

const BackButton = () => {
  return (
    <>
      <div className="back-button-container">
        <a href="/">
          <Button className="back-button">{'<'}</Button>
        </a>
      </div>
    </>
  );
};

export default BackButton;
