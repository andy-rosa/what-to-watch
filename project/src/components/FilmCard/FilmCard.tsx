import React, {useEffect, useRef, useState} from 'react';
import {generatePath, Link} from 'react-router-dom';
import {Films} from '../../mocks/films';
import cls from './FilmsCard.module.css';
import {RoutePath} from '../Routers/AppRouter/config/routerConfig';
import CardPlayer from './elements/CardPlayer';
import CardPoster from './elements/CardPoster';

export type FilmCardProps = Pick<Films, 'name' | 'posterImage' | 'id' | 'videoLink' >

const FilmCard = ({name, posterImage, id, videoLink}: FilmCardProps): JSX.Element => {
  const [ isActive, setIsActive] = useState<null | number>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const mouseOverHandler = () => {
    setIsActive(id);
  };

  const mouseOutHandler = () => {
    setIsActive(null);
  };

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();

        }
      }, 1000);
    }
  });

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
        {
          isActive
            ? < CardPlayer videoLink={videoLink} posterImage={posterImage}/>
            : < CardPoster name={name} posterImage={posterImage} />
        }
      </Link>
    </article>

  );
};

export default FilmCard;
