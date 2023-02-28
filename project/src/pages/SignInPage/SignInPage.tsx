import React from 'react';
import Footer from "../../components/ui/Footer/Footer";
import SignInHeader from "../../components/ui/Headers/SignInHeader/SignInHeader";
import SignInForm from "../../components/ui/SignInForm/SignInForm";

const SignInPage = () => {
  return (
    <div className="user-page">
      <SignInHeader />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default SignInPage;
