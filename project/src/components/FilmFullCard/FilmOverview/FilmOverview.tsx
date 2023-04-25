import React from 'react';
import FilmCardRating, {FilmCardRatingProps} from '../FilmOverview/elements/FilmCardRating/FilmCardRating';
import FilmCardText, {FilmCardTextProps} from '../FilmOverview/elements/FilmCardText/FilmCardText';
import {Films} from '../../../types/films';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getFilm} from '../../../store/Films/selectors/getFilm/getFilm';

type FilmOverview = Pick<Films, FilmCardRatingProps | FilmCardTextProps>

const FilmOverview = () => {
  const {rating, scoresCount, director, starring, description} = useAppSelector(getFilm) as FilmOverview;

  return (
    <>
      <FilmCardRating rating={rating} scoresCount={scoresCount}/>
      <FilmCardText description={description} director={director} starring={starring}/>
    </>
  );
};

export default FilmOverview;
