import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import SignInField from './elements/SignInField/SignInField';
import {loginAction, UserAuthPost} from '../../../store/User/actions/login/login.api';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getUserAuthStatus} from '../../../store/User/selectors/getUserAuthStatus/getUserAuthStatus';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../../types/user';
import {RoutePath} from '../../Routers/AppRouter/config/routerConfig';

const SignInForm = () => {
  const [form, setForm] = useState<UserAuthPost>({email: '', password: ''});
  const authorizationStatus = useAppSelector(getUserAuthStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeFormHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(RoutePath.main);
    }
  }, [authorizationStatus, navigate]);


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
