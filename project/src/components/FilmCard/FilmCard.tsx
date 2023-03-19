import React, { useState } from 'react';
import {generatePath, Link} from 'react-router-dom';
import {Films} from '../../mocks/films';
import cls from './FilmsCard.module.css';
import {RoutePath} from '../Routers/AppRouter/config/routerConfig';
import CardToggle from './elements/CardToggle';

export type FilmCardProps = Pick<Films, 'name' | 'posterImage' | 'id' | 'videoLink' >

const FilmCard = ({name, posterImage, id, videoLink}: FilmCardProps): JSX.Element => {
  const [ isActive, setIsActive] = useState<boolean>(false);

  const mouseOverHandler = () => {
    setIsActive(true);
  };

  const mouseOutHandler = () => {
    setIsActive(false);
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
        <CardToggle
          isActive={isActive}
          videoLink={videoLink}
          posterImage={posterImage}
          name={name}
        />
      </Link>
    </article>

  );
};

export default FilmCard;
