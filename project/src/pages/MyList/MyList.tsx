import React from 'react';
import Footer from "../../components/ui/Footer/Footer";
import UserPageHeader from "../../components/ui/UserPageHeader/UserPageHeader";
import SignInForm from "../../components/ui/SignInForm/SignInForm";

const MyList = () => {
  return (
    <div className="user-page">
      <UserPageHeader />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default MyList;
