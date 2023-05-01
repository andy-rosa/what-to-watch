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
    expect(getUserAuthStatus(state as RootState)).toBe(AuthorizationStatus.Unknown);
  });
});
