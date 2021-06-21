import React, { useState } from 'react';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import CardOptionButton from '../CardOptionButton/CardOptionButton';
import CardInner, { cardInnerProps, defaultCardInfo } from '../CardInner/CardInner';
import './RegisterForm.scss';

const RegisterForm = () => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);
  const [modalOpen, setModalOpen] = useState(false);

  const checkCardNums = (): boolean => {
    if (cardInfo.cardNum1.length === 4 && cardInfo.cardNum2.length === 4 && cardInfo.cardNum3.length === 4) {
      return true;
    }
    return false;
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, maxLength } = e.target;
    let newValue: string = value;

    if (value.length > maxLength && maxLength !== -1) {
      newValue = value.slice(0, maxLength);
    } // check length validation
    if (name === 'expireMonth' && value > '12') {
      newValue = '0';
    } // check expire month validation
    setCardInfo({ ...cardInfo, [name]: newValue });
    if (name === 'cardNum4' && value.length === 4 && checkCardNums()) {
      openModal();
    } // 카드 번호를 다 입력했을 때 모달을 띄움
  };

  const onClickButton = () => {
    const rawCards: string | null = window.localStorage.getItem('cards');
    const cards: cardInnerProps[] = rawCards ? JSON.parse(rawCards) : [];
    cards.push(cardInfo);
    window.localStorage.setItem('cards', JSON.stringify(cards));
    window.location.href = '/';
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        <Modal open={modalOpen} onClickClose={closeModal} header="카드 종류를 선택하세요.">
          <CardOptionButton cardName="shinhan"></CardOptionButton>
        </Modal>
        <form className="register-form">
          <div className="register-item">
            <label htmlFor="card-number">카드번호</label>
            <div className="register-input-container flex-row-spacebetween">
              <Input name="cardNum1" type="number" value={cardInfo.cardNum1} maxLength={4} onChange={onChangeInput} />
              -
              <Input name="cardNum2" type="number" value={cardInfo.cardNum2} maxLength={4} onChange={onChangeInput} />
              -
              <Input name="cardNum3" type="number" value={cardInfo.cardNum3} maxLength={4} onChange={onChangeInput} />
              -
              <Input name="cardNum4" type="number" value={cardInfo.cardNum4} maxLength={4} onChange={onChangeInput} />
            </div>
          </div>
          <div className="register-item register-expiry-date-container">
            <label htmlFor="expiry-date">만료일</label>
            <div className="register-input-container flex-row-spacebetween w8rem">
              <Input
                name="expireMonth"
                type="number"
                value={cardInfo.expireMonth}
                maxLength={2}
                onChange={onChangeInput}
              />
              /
              <Input
                name="expireYear"
                type="number"
                value={cardInfo.expireYear}
                maxLength={2}
                onChange={onChangeInput}
              />
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
              maxLength={3}
              onChange={onChangeInput}
            />
          </div>
          <div className="register-item">
            <label htmlFor="password">카드 비밀번호</label>
            <div className="w10rem flex-row-spacebetween">
              <Input
                className="register-input-container w2rem"
                name="password1"
                type="password"
                value={cardInfo.password1}
                maxLength={1}
                onChange={onChangeInput}
              />
              <Input
                className="register-input-container w2rem"
                name="password2"
                type="password"
                value={cardInfo.password2}
                maxLength={1}
                onChange={onChangeInput}
              />
              <Input
                className="register-input-container w2rem"
                name="password"
                type="string"
                value="*"
                onChange={onChangeInput}
                readOption={true}
              />
              <Input
                className="register-input-container w2rem"
                name="password"
                type="string"
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
