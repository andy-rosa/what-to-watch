import { User } from '../../../types/user';

export function generateUserMock(): User {
  return {
    avatarUrl: 'https://i.pravatar.cc/300',
    email: '',
    id: 0,
    name: '',
    token: '',
  };
}
