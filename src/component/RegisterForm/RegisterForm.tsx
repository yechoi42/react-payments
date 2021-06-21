import React, { useState } from 'react';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';
import CardInner, { cardInnerProps, defaultCardInfo } from '../CardInner/CardInner';
import './RegisterForm.scss';
import classNames from 'classnames/bind';

const styles = require('./RegisterForm.scss');
const cx = classNames.bind(styles);

const RegisterForm = () => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const onClickButton = () => {
    const rawCards: string | null = window.localStorage.getItem('cards');
    const cards: cardInnerProps[] = rawCards ? JSON.parse(rawCards) : [];
    cards.push(cardInfo);
    window.localStorage.setItem('cards', JSON.stringify(cards));
  };

  return (
    <>
      <div id="register-page">
        <Card>
          <CardInner
            cardCompany={cardInfo.cardCompany}
            name={cardInfo.name}
            cardNum1={cardInfo.cardNum1}
            cardNum2={cardInfo.cardNum2}
            cardNum3={cardInfo.cardNum3}
            cardNum4={cardInfo.cardNum4}
            password1={cardInfo.password1}
            password2={cardInfo.password2}
            cvc={cardInfo.cvc}
            expireMonth={cardInfo.expireMonth}
            expireYear={cardInfo.expireYear}
          />
        </Card>
        <form className="register-form">
          <div className="register-item">
            <label htmlFor="card-number">카드번호</label>
            <div className={cx(['register-input-container', 'flex-row-spacebetween'])}>
              <Input name="cardNum1" type="number" value={cardInfo.cardNum1} onChange={onChangeInput} />
              -
              <Input name="cardNum2" type="number" value={cardInfo.cardNum2} onChange={onChangeInput} />
              -
              <Input name="cardNum3" type="number" value={cardInfo.cardNum3} onChange={onChangeInput} />
              -
              <Input name="cardNum4" type="number" value={cardInfo.cardNum4} onChange={onChangeInput} />
            </div>
          </div>
          <div className="register-item register-expiry-date-container">
            <label htmlFor="expiry-date">만료일</label>
            <div className={cx(['register-input-container', 'flex-row-spacebetween', 'w8rem'])}>
              <Input name="expireMonth" type="number" value={cardInfo.expireMonth} onChange={onChangeInput} />
              /
              <Input name="expireYear" type="number" value={cardInfo.expireYear} onChange={onChangeInput} />
            </div>
          </div>
          <div className="register-item">
            <label htmlFor="name">카드 소유자 이름</label>
            <Input
              className="register-input-container w6rem"
              name="name"
              type="string"
              value={cardInfo.name}
              onChange={onChangeInput}
            />
          </div>
          <div className="register-item">
            <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
            <Input
              className="register-input-container w4rem"
              name="cvc"
              type="number"
              value={cardInfo.cvc}
              onChange={onChangeInput}
            />
          </div>
          <div className="register-item">
            <label htmlFor="password">카드 비밀번호</label>
            <div className={cx(['w10rem', 'flex-row-spacebetween'])}>
              <Input
                className="register-input-container w2rem"
                name="password1"
                type="password"
                value={cardInfo.password1}
                onChange={onChangeInput}
              />
              <Input
                className="register-input-container w2rem"
                name="password2"
                type="password"
                value={cardInfo.password2}
                onChange={onChangeInput}
              />
              <Input
                className="register-input-container w2rem text-center"
                name="password"
                type="password"
                value="*"
                onChange={onChangeInput}
                readOption={true}
              />
              <Input
                className="register-input-container w2rem"
                name="password"
                type="password"
                value="*"
                onChange={onChangeInput}
                readOption={true}
              />
            </div>
          </div>
        </form>
        <Button className="register-button" onClick={onClickButton}>
          등록하기
        </Button>
      </div>
    </>
  );
};

export default RegisterForm;
