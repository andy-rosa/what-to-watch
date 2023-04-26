import React from 'react';
import FilmCardRating, {FilmCardRatingProps} from './elements/film-card-rating/film-card-rating';
import FilmCardText, {FilmCardTextProps} from './elements/film-card-text/film-card-text';
import {Films} from '../../../../../types/films';
import {useAppSelector} from '../../../../../hooks/useAppSelector';
import {getFilm} from '../../../../../store/films/selectors/get-film/get-film';

type FilmOverviewPick = Pick<Films, FilmCardRatingProps | FilmCardTextProps>

const FilmOverview = () => {
  const {
    rating,
    scoresCount,
    director,
    starring,
    description
  } = useAppSelector(getFilm) as FilmOverviewPick;

  return (
    <>
      <FilmCardRating rating={rating} scoresCount={scoresCount}/>
      <FilmCardText description={description} director={director} starring={starring}/>
    </>
  );
};

export default FilmOverview;
