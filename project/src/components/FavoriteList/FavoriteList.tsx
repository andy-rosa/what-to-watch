import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchFavoriteListAction } from '../../store/Films/actions/fetchFavoriteListAction/fetchFavoriteListAction.api';
import FilmCard, { FilmCardProps } from '../FilmCard/FilmCard';
import { STEP } from '../sections/Catalog/Catalog';
import {getFavoriteListFilm} from '../../store/Films/selectors/getFavoriteListFilm/getFavoriteListFilm';


const FavoriteList = () => {
  const films = useAppSelector(getFavoriteListFilm);
  const dispatch = useAppDispatch();
  const [range, setRange] = React.useState<number>(STEP);

  const handleClick = () => {
    setRange(range + STEP);
  };

  useEffect(() => {
    dispatch(fetchFavoriteListAction());
  });

  const createFilmCard = ({posterImage, id, name, videoLink}: FilmCardProps) => (
    <FilmCard
      key={id}
      id={id}
      name={name}
      posterImage={posterImage}
      videoLink={videoLink}
    />
  );

  const createCurrentFilmsList = () => films.slice(0, range).map(createFilmCard);

  return (
    <>
      <div className="catalog__films-list" data-testid={'films-list'}>
        {
          createCurrentFilmsList()
        }
      </div>
      {
        range < films.length &&
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
    </div>
      }
    </>
  );
};

export default FavoriteList;
