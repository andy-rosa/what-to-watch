import { fireEvent, render, screen } from '@testing-library/react';
import SignInForm from './SignInForm';
import { AuthorizationStatus } from '../../../types/user';
import { RoutePath } from '../../Routers/AppRouter/config/routerConfig';
import { loginAction } from '../../../store/User/actions/login/login.api';
import MockProviderWithComponent from "../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent";
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

jest.mock('../../../store/User/actions/login/login.api');
jest.mock('../../../hooks/useAppDispatch');
jest.mock('../../../hooks/useAppSelector');

describe('SignInForm', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('dispatches login action when form is submitted with valid inputs', () => {
    const mockDispatch = jest.fn();
    useAppDispatch.mockReturnValue(mockDispatch);
    useAppSelector.mockReturnValue(AuthorizationStatus.NoAuth);

    const signInForm = new MockProviderWithComponent(<SignInForm />)
    signInForm.path = RoutePath.sign_in;
    render(signInForm.renderTest());

    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalledWith(loginAction({ email: 'test@test.com', password: 'password' }));
  });
});
