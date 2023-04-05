import {ChangeEvent, FormEvent, useState} from 'react';
import SignInField from './elements/SignInField';
import {loginAction, UserAuthPost} from '../../../store/User/actions/login/login.api';

const SignInForm = () => {
  const [form, setForm] = useState<UserAuthPost>({email: '', password: ''});

  const changeFormHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginAction(form);
  };

  return (
    <div className="sign-in user-page__content">
      <form
        action="project/src/components/SignInForm#"
        className="sign-in__form"
        onSubmit={submitHandler}
      >
        <div className="sign-in__fields">
          <SignInField
            label={'Email address'}
            entityForm={'user'}
            type={'email'}
            onChange={changeFormHandler}
          />
          <SignInField
            label={'Password'}
            entityForm={'user'}
            type={'password'}
            onChange={changeFormHandler}
          />
        </div>
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
