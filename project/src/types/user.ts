export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export interface User {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
}

export interface UserState {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
}
