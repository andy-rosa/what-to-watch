export enum GenreName {
  ALL_GENRES = 'All genres',
  COMEDIES = 'Comedies',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMAS = 'Dramas',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  THRILLERS = 'Thrillers',
}

export const GenreFilter: Record<GenreName, string> = {
  [GenreName.ALL_GENRES]: 'All genres',
  [GenreName.COMEDIES]: 'Comedy',
  [GenreName.CRIME]: 'Crime',
  [GenreName.DOCUMENTARY]: 'Documentary',
  [GenreName.DRAMAS]: 'Drama',
  [GenreName.HORROR]: 'Horror',
  [GenreName.KIDS_AND_FAMILY]: 'Kids & Family',
  [GenreName.ROMANCE]: 'Romance',
  [GenreName.SCI_FI]: 'Sci-Fi',
  [GenreName.THRILLERS]: 'Thriller',
} as const;

export type GenresFilter = keyof typeof GenreFilter;

export interface GenreState {
  selected: GenreName;
}
