import React, {useEffect} from 'react';
import FilmCard, {FilmCardProps} from '../../FilmCard/FilmCard';
import {useParams} from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {getFilteredFilms} from '../../../store/Films/selectors/getFilteredFilms/getFilteredFilms';
import {getNonRepeatFilmCard} from '../../../helpers/getNonRepeatFilmsCard';
import Loader from '../../Loader/Loader';
import {useAppSelector} from '../../../hooks/useAppSelector';
import { fetchFilmsSimilarAction } from '../../../store/Films/actions/fetchFilmsSimilarAction/fetchFilmsSimilarAction.api';
import { fetchFilmsAction } from '../../../store/Films/actions/fetchFilmsAction/fetchFilmsAction.api';
import {STEP} from '../../sections/Catalog/Catalog';

interface CatalogFilmsListProps {
  range?: number;
  handleClick?: () => void;
}

const CatalogFilmsList = ({range = STEP, handleClick}: CatalogFilmsListProps) => {
  const {id: idUrl} = useParams();
  const films = useAppSelector(getFilteredFilms);
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector((state) => state.films);

  useEffect(() => {
    if (idUrl) {
      dispatch(fetchFilmsSimilarAction(idUrl));
    } else {
      dispatch(fetchFilmsAction());
    }
  },[idUrl]);

  const createFilmCard = ({posterImage, id, name, videoLink}: FilmCardProps) => (
    <FilmCard
      key={id}
      id={id}
      name={name}
      posterImage={posterImage}
      videoLink={videoLink}
    />
  );

  const createCurrentFilmsList = () => {
    if (idUrl) {
      return getNonRepeatFilmCard(films, idUrl).map(createFilmCard);
    }
    return films.slice(0, range).map(createFilmCard);
  };

  return (
    <>
      <div className="catalog__films-list" data-testid={'films-list'}>
        {
          isLoading
            ? <Loader />
            : createCurrentFilmsList()
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

export default CatalogFilmsList;
