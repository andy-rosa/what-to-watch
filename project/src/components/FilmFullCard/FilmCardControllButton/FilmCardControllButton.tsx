import React from 'react';
import {generatePath, Link} from 'react-router-dom';
import {RoutePath} from '../../Routers/AppRouter/config/routerConfig';
import {Films} from '../../../mocks/films';

const FilmCardButton = ({id}: Pick<Films, 'id'>) => (
  <div className="film-card__buttons">
    <Link to={generatePath(RoutePath.player, {id})} className="btn btn--play film-card__button" >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link >
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">9</span>
    </button>
    <Link to={RoutePath.add_review} className={'btn film-card__button'} >
        Add review
    </Link>
  </div>
);

export default FilmCardButton;
