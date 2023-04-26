import React, {useEffect} from 'react';
import Header from '../../../components/Headers/Header';
import AddReviewForm from '../../../components/Forms/AddReviewForm/AddReviewForm';

import {useAppSelector} from '../../../hooks/useAppSelector';
import {getFilm} from '../../../store/Films/selectors/getFilm/getFilm';
import {fetchFilmAction} from '../../../store/Films/actions/fetchFilmAction/fetchFilmActions.api';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useParams } from 'react-router-dom';

const AddReviewPage = () => {
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect( () => {
    dispatch(fetchFilmAction(id as string));
  },[ id, dispatch ]);

  return (
    <div>
      {film &&
      <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>

          <Header isShowBreadcrumb/>
          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218"
              height="327"
            />
          </div>
        </div>
        <AddReviewForm />
      </section>}
    </div>
  );
};

export default AddReviewPage;
