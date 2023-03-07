export interface Reviews {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export interface User {
  id: number;
  name: string;
}

export const reviewsData: Reviews[] = [
  {
    'id': 1,
    'user': {
      'id': 12,
      'name': 'Isaac'
    },
    'rating': 8,
    'comment': 'This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.',
    'date': '2023-02-26T10:33:21.332Z'
  },
  {
    'id': 2,
    'user': {
      'id': 14,
      'name': 'Corey'
    },
    'rating': 9.9,
    'comment': 'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
    'date': '2023-02-06T10:33:21.332Z'
  },
  {
    'id': 3,
    'user': {
      'id': 15,
      'name': 'Kendall'
    },
    'rating': 3,
    'comment': 'I really find it difficult to believe this movie is rated highly by people. It\'s hands down the worst movie I\'ve seen in my life',
    'date': '2023-02-24T10:33:21.332Z'
  }
];
