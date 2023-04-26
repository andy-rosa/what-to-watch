import userReducer from './user-slice';
import {AuthorizationStatus, UserState} from '../../../types/user';
import {checkAuthorization} from '../actions/check-authorization/check-authorization.api';
import {generateUserMock} from '../mock-test/generate-user-mock';
import {loginAction} from '../actions/login/login.api';
import {logoutAction} from '../actions/logout/logout.api';

describe('userSlice reducer', () => {
  let initialState: UserState;

  beforeEach(() => {
    initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        initialState, checkAuthorization.fulfilled(payload)
      )).toEqual(expectedState);
    });

    it('should handle check-authorization.rejected', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        initialState, checkAuthorization.rejected(new Error('error'))
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        initialState, loginAction.fulfilled(payload)
      )).toEqual(expectedState);
    });

    it('should handle loginAction.rejected', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        initialState, loginAction.rejected(new Error('error'))
      )).toEqual(expectedState);
    });
  });

  describe('logout', () => {
    it('should handle logoutAction.fulfilled', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        initialState, logoutAction.fulfilled()
      )).toEqual(expectedState);
    });

    it('should handle logoutAction.rejected', () => {
      const expectedState: UserState = {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      };
      expect(userReducer(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        initialState, loginAction.rejected(new Error('error'))
      )).toEqual(expectedState);
    });
  });
});
