import { DeepPartial } from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../../../types/user';
import {getUserAuthStatus} from './get-user-auth-status';
import {RootState} from '../../../../types/root-state';

describe('get-user-auth-status.test', () => {
  test('should return status', () => {
    const state: DeepPartial<RootState> = {
      user: {
        authorizationStatus: AuthorizationStatus.Unknown
      },
    };
    // нужна помощь с типизацией
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getUserAuthStatus(state)).toBe(AuthorizationStatus.Unknown);
  });
});
