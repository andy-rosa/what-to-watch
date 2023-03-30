import {GenreName} from './genre';

export interface Films {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: GenreName;
  released: number;
  isFavorite: boolean;
}

export interface FilmsState {
  films: Films[];
}
