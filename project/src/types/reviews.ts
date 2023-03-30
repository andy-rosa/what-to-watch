export interface User {
  id: number;
  name: string;
}

export interface Reviews {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}
