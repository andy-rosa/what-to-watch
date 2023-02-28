import React from 'react';
import Footer from '../../components/Footer/Footer';
import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import Header from '../../components/Headers/Header';

const SignInPage = () => (
  <div className="user-page">
    <Header isUserBlock={false}>Sign in</Header>
    <SignInForm />
    <Footer />
  </div>
);

export default SignInPage;
