import React, {useEffect} from 'react';
import FilmCard, {FilmCardProps} from '../../FilmCard/FilmCard';
import {useParams} from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {getFilteredFilms} from '../../../store/Films/selectors/getFilteredFilms/getFilteredFilms';
import {fetchFilmsAction, fetchFilmsSimilarAction} from '../../../store/Films/actions/action.api';
import {getNonRepeatFilmCard} from '../../../helpers/getNonRepeatFilmsCard';

const CatalogFilmsList = () => {
  const {id: idUrl} = useParams();
  const films = useSelector(getFilteredFilms);
  const dispatch = useAppDispatch();

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

  return (
    <div className="catalog__films-list">
      { idUrl
        ? getNonRepeatFilmCard(films, idUrl).map(createFilmCard)
        : films.map(createFilmCard)}
    </div>
  );
};

export default CatalogFilmsList;
