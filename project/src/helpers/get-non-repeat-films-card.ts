import {Films} from '../types/films';

const MIN_FILMS_MORE_LIKE_THIS = 0;
const MAX_FILMS_MORE_LIKE_THIS = 4;

export const getNonRepeatFilmCard = (films: Films[], idUrl: string | undefined) =>
  films.filter((film) => String(film.id) !== idUrl )
    .sort((a, b) => Math.random() - 0.5)
    .slice(MIN_FILMS_MORE_LIKE_THIS, MAX_FILMS_MORE_LIKE_THIS);
