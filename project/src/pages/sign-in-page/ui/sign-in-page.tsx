import Footer from '../../../components/footer/footer';
import SignInForm from '../../../components/forms/sign-in-form/sign-in-form';
import Header from '../../../components/headers/header';

const SignInPage = () => (
  <div className="user-page">
    <Header isUserBlock={false}>Sign in</Header>
    <SignInForm />
    <Footer />
  </div>
);

export default SignInPage;
