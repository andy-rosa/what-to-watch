import React from 'react';
import FilmCardRating, {FilmCardRatingProps} from '../FilmOverview/elements/FilmCardRating/FilmCardRating';
import FilmCardText, {FilmCardTextProps} from '../FilmOverview/elements/FilmCardText/FilmCardText';
import {Films} from '../../../types/films';
import { useParams } from 'react-router-dom';

type FilmDetailsProps = Pick<Films, FilmCardRatingProps | FilmCardTextProps>

const FilmOverview = ({rating, scoresCount, director, starring, description}: FilmDetailsProps) => {
  const { id } = useParams();

  return (
    <>
      <FilmCardRating rating={rating} scoresCount={scoresCount}/>
      <FilmCardText description={description} director={director} starring={starring}/>
    </>
  );
};

export default FilmOverview;
