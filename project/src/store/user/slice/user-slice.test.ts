import userReducer from './user-slice';
import {AuthorizationStatus, UserState} from '../../../types/user';
import {checkAuthorization} from '../actions/check-authorization/check-authorization.api';
import {generateUserMock} from '../mock-test/generate-user-mock';
import {loginAction, UserAuthPost} from '../actions/login/login.api';
import {logoutAction} from '../actions/logout/logout.api';

describe('userSlice reducer', () => {
  let initialState: UserState;
  let userPost: UserAuthPost;

  beforeEach(() => {
    initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null
    };

    userPost = {
      email: '12dw@mail.ru',
      password: '12a'
    };
  });

  it('should return the initial state', () => {
    expect(userReducer(undefined, {} as never)).toEqual(initialState);
  });

  describe('check authorization', () => {
    it('should handle check-authorization.fulfilled', () => {
      const payload = generateUserMock();
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.Auth,
        user: payload,
      };
      expect(userReducer(
        initialState, checkAuthorization.fulfilled(payload, 'test', undefined)
      )).toEqual(expectedState);
    });

    it('should handle check-authorization.rejected', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        initialState, checkAuthorization.rejected(new Error('error'), 'test', undefined)
      )).toEqual(expectedState);
    });
  });

  describe('login', () => {
    it('should handle loginAction.fulfilled', () => {
      const payload = generateUserMock();
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.Auth,
        user: payload,
      };
      expect(userReducer(
        initialState, loginAction.fulfilled(payload, 'test', userPost)
      )).toEqual(expectedState);
    });

    it('should handle loginAction.rejected', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        initialState, loginAction.rejected(new Error('error'), 'test', userPost)
      )).toEqual(expectedState);
    });
  });

  describe('logout', () => {
    const _: void = undefined;
    it('should handle logoutAction.fulfilled', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        initialState, logoutAction.fulfilled(_, 'test', undefined)
      )).toEqual(expectedState);
    });

    it('should handle logoutAction.rejected', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        initialState, loginAction.rejected(new Error('error'), 'test', userPost)
      )).toEqual(expectedState);
    });
  });
});
