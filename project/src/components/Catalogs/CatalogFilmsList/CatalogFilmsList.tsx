import React, {useEffect} from 'react';
import FilmCard, {FilmCardProps} from '../../FilmCard/FilmCard';
import {useParams} from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {getFilteredFilms} from '../../../store/Films/selectors/getFilteredFilms/getFilteredFilms';
import {fetchFilmsAction, fetchFilmsSimilarAction} from '../../../store/Films/actions/action.api';
import {getNonRepeatFilmCard} from '../../../helpers/getNonRepeatFilmsCard';
import Loader from '../../Loader/Loader';
import {useAppSelector} from '../../../hooks/useAppSelector';

const CatalogFilmsList = () => {
  const {id: idUrl} = useParams();
  const films = useSelector(getFilteredFilms);
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
    return films.map(createFilmCard);
  };

  return (
    <div className="catalog__films-list">
      {
        isLoading
          ? <Loader />
          : createCurrentFilmsList()
      }
    </div>
  );
};

export default CatalogFilmsList;
