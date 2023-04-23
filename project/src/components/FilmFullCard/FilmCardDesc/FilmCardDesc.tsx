import React from 'react';
import FilmCardNav, {FilmCardNavProps} from './elements/FilmCardNav/FilmCardNav';
import FilmCardRating, {FilmCardRatingProps} from './elements/FilmCardRating/FilmCardRating';
import FilmCardText, {FilmCardTextProps} from './elements/FilmCardText/FilmCardText';
import {Films} from '../../../types/films';

export type FilmCardDescProps = Pick<Films, FilmCardRatingProps | FilmCardTextProps | FilmCardNavProps>

const FilmCardDesc = ({rating, scoresCount, director, starring, description, id }: FilmCardDescProps ) => (
  <div className="film-card__desc">
    <FilmCardNav id={id}/>
    <FilmCardRating rating={rating} scoresCount={scoresCount}/>
    <FilmCardText description={description} director={director} starring={starring}/>
  </div>
);

export default FilmCardDesc;
