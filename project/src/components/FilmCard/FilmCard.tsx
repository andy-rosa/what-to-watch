import React from 'react';
import {Link} from 'react-router-dom';
import { RoutePath } from '../Routers/AppRouter/config/routerConfig';

const FilmCard = (): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <Link
      to={RoutePath.film}
      style={{ textDecoration: 'none', color: '#dfcf77' }}
    >
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
          alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <span className={'small-film-card__link'}>
          Fantastic Beasts: The Crimes of Grindelwald
        </span>
      </h3>
    </Link>
  </article>

);

export default FilmCard;
