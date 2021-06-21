import React from 'react';
import BackButton from '../component/BackButton/BackButton';
import RegisterForm from '../component/RegisterForm/RegisterForm';
import '../index.scss';

const RegisterPage = () => {
  return (
    <>
      <div id="register-page">
        <BackButton />
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
