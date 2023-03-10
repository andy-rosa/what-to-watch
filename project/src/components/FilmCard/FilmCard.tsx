import React, {useState} from 'react';
import {generatePath, Link} from 'react-router-dom';
import {Films} from '../../mocks/films';
import cls from './FilmsCard.module.css';
import {RoutePath} from '../Routers/AppRouter/config/routerConfig';

export type FilmCardProps = Pick<Films, 'name' | 'posterImage' | 'id' >

const FilmCard = ({name, posterImage, id}: FilmCardProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ isActive, setIsActive] = useState<null | number>(null);

  const mouseOverHandler = () => {
    setIsActive(id);
  };

  const mouseOutHandler = () => {
    setIsActive(null);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <Link
        to={generatePath(RoutePath.film, {id})}
        className={cls.wrapper}
      >
        <div className="small-film-card__image">
          <img src={posterImage}
            alt={name} width="280" height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <span className={'small-film-card__link'}>
            {name}
          </span>
        </h3>
      </Link>
    </article>

  );
};

export default FilmCard;
