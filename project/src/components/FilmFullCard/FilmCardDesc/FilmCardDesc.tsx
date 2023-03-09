import React from 'react';
import FilmCardNav, {FilmCardNavProps} from './elements/FilmCardNav';
import FilmCardRating, {FilmCardRatingProps} from './elements/FilmCardRating';
import FilmCardText, {FilmCardTextProps} from './elements/FilmCardText';
import {Films} from '../../../mocks/films';

export type FilmCardDescProps = Pick<Films, FilmCardRatingProps | FilmCardTextProps | FilmCardNavProps>

const FilmCardDesc = ({rating, scoresCount, director, starring, description, id }: FilmCardDescProps ) => (
  <div className="film-card__desc">
    <FilmCardNav id={id}/>
    <FilmCardRating rating={rating} scoresCount={scoresCount}/>
    <FilmCardText description={description} director={director} starring={starring}/>
  </div>
);

export default FilmCardDesc;
