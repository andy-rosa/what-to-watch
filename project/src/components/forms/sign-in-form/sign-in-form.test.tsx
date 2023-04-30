import { fireEvent, render, screen } from '@testing-library/react';
import SignInForm from './sign-in-form';
import { AuthorizationStatus } from '../../../types/user';
import { RoutePath } from '../../routers/app-router/config/router-config';
import { loginAction } from '../../../store/user/actions/login/login.api';
import MockProviderWithComponent from '../../../hoc/mock-provider-with-component/mock-provider-with-component';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { useAppSelector } from '../../../hooks/use-app-selector';
/* eslint-disable */

jest.mock('../../../store/user/actions/login/login.api');
jest.mock('../../../hooks/use-app-dispatch');
jest.mock('../../../hooks/use-app-selector');

describe('SignInForm', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('dispatches login action when form is submitted with valid inputs', () => {
    const mockDispatch = jest.fn();
    (useAppDispatch as any).mockReturnValue(mockDispatch);
    (useAppSelector as any).mockReturnValue(AuthorizationStatus.NoAuth);

    const signInForm = new MockProviderWithComponent(<SignInForm />);
    signInForm.path = RoutePath.sign_in;
    render(signInForm.renderTest());

    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password1' } });
    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalledWith(loginAction({ email: 'test@test.com', password: 'password' }));
  });
});
