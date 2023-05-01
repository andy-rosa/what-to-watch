import { useState } from 'react';
import {generatePath, Link} from 'react-router-dom';
import {Films} from '../../types/films';
import cls from './film-card.module.css';
import {RoutePath} from '../routers/app-router/config/router-config';
import CardToggle from './elements/card-toggle/card-toggle';

export type FilmCardProps = Pick<Films, 'name' | 'posterImage' | 'id' | 'videoLink' >

const FilmCard = ({name, posterImage, id, videoLink}: FilmCardProps): JSX.Element => {
  const [ isActive, setIsActive] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseOut = () => {
    setIsActive(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Link
        to={generatePath(RoutePath.film, {id})}
        className={cls.wrapper}
        data-testid="link-to-film"
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
