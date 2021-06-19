import React, { useState } from 'react';
import Card from '../Card/Card';
import Input from '../Input/Input';
import CardInner, { defaultCardInfo } from '../CardInner/CardInner';
import './RegisterForm.scss';

const RegisterForm = () => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(cardInfo);
    setCardInfo({ ...cardInfo, [name]: value });
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
            password={cardInfo.password}
            cvc={cardInfo.cvc}
            expireMonth={cardInfo.expireMonth}
            expireYear={cardInfo.expireYear}
          />
        </Card>
        <form className="register-form">
          <div className="register-item">
            <label htmlFor="card-number">카드번호</label>
            <div className="register-input-container register-card-number-input">
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
            <div className="register-input-container register-expiry-date-input">
              <Input name="expireMonth" type="number" value={cardInfo.expireMonth} onChange={onChangeInput} />
              /
              <Input name="expireYear" type="number" value={cardInfo.expireYear} onChange={onChangeInput} />
            </div>
          </div>
          <div className="register-item">
            <label htmlFor="name">카드 소유자 이름</label>
            <div className="register-input-container register-card-owner-input">
              <Input name="name" type="string" value={cardInfo.name} onChange={onChangeInput} />
            </div>
          </div>
          <div className="register-item">
            <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
            <div className="register-input-container register-security-code-input">
              <Input name="cvc" type="number" value={cardInfo.cvc} onChange={onChangeInput} />
            </div>
          </div>
          <div className="register-item">
            <label htmlFor="password">카드 비밀번호</label>
            <div className="register-input-container register-password-input">
              <Input name="password" type="password" value={cardInfo.password} onChange={onChangeInput} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
