export interface UserPost {
  id: number;
  name: string;
}

export interface Reviews {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserPost;
}

export interface ReviewsState {
  reviews: Reviews[];
  isLoading: boolean;
  error: string | null;
}
