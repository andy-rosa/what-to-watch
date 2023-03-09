import React from 'react';
import { NavLink } from 'react-router-dom';
import {Films} from '../../../../mocks/films';

export type FilmCardNavProps = 'id'

const FilmCardNav = ({id}: Pick<Films, FilmCardNavProps>) => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      <li className="film-nav__item film-nav__item--active">
        <a href="project/src/components/FilmFullCard/FilmCardDesc/elements#" className="film-nav__link">Overview</a>
      </li>
      <li className="film-nav__item">
        <a href="project/src/components/FilmFullCard/FilmCardDesc/elements#" className="film-nav__link">Details</a>
      </li>
      <li className="film-nav__item">
        <NavLink to={`/films/${id}/review`} className="film-nav__link">Reviews</NavLink>
      </li>
    </ul>
  </nav>
);

export default FilmCardNav;
