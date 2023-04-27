import {useEffect} from 'react';
import Header from '../../../components/headers/header';
import AddReviewForm from '../../../components/forms/add-review-form/add-review-form';

import {useAppSelector} from '../../../hooks/use-app-selector';
import {getFilm} from '../../../store/films/selectors/get-film/get-film';
import {fetchFilmAction} from '../../../store/films/actions/fetch-film-action/fetch-film-action.api';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
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
