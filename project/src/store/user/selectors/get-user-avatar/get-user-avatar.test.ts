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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getUserAvatar(state)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    ).toEqual(state.user.user.avatarUrl);
  });
});
