import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/root-state';
import {generateUserMock} from '../../mock-test/generate-user-mock';
import {getUserAvatar} from './get-user-avatar';

describe('get-user-avatar.test', () => {
  test('get user avatar', () => {
    const state: DeepPartial<RootState> = {
      user: {
        user: generateUserMock()
      }
    };
    expect(
      getUserAvatar(state as RootState)
    ).toEqual(state.user?.user?.avatarUrl);
  });
});
