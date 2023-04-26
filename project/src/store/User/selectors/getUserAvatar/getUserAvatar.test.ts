import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/rootState';
import {generateUserMock} from '../../mock-test/generateUserMock';
import {getUserAvatar} from './getUserAvatar';

describe('getUserAvatar.test', () => {
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
