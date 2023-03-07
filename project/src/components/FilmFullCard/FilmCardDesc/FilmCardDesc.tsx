import React from 'react';
import FilmCardNav, {FilmCardNavProps} from './elements/FilmCardNav';
import FilmCardRating, {FilmCardDescProps} from './elements/FilmCardRating';
import FilmCardText, {FilmCardTextProps} from './elements/FilmCardText';
import {Films} from '../../../mocks/films';


const FilmCardDesc = ({rating, scoresCount, director, starring, description, id }: Pick<Films, FilmCardDescProps | FilmCardTextProps | FilmCardNavProps > ) => (
  <div className="film-card__desc">
    <FilmCardNav id={id}/>
    <FilmCardRating rating={rating} scoresCount={scoresCount}/>
    <FilmCardText description={description} director={director} starring={starring}/>
  </div>
);

export default FilmCardDesc;
