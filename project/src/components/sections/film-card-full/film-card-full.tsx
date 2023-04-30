import {Suspense, useEffect} from 'react';
import Header from '../../headers/header';
import FilmCardDesc from '../../film-full-card/film-card-desc/film-card-desc';
import FilmCardPoster from '../../film-full-card/film-card-poster/film-card-poster';
import FilmCardButton from '../../film-full-card/film-card-controll-button/film-card-controll-button';
import {useNavigate, useParams} from 'react-router-dom';
import Loader from '../../loader/loader';
import {useAppDispatch} from '../../../hooks/use-app-dispatch';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {getFilm} from '../../../store/films/selectors/get-film/get-film';
import {fetchFilmAction} from '../../../store/films/actions/fetch-film-action/fetch-film-action.api';
import {fetchReviewsAction} from '../../../store/reviews/actions/fetch-reviews/fetch-reviews-action.api';

const FilmCardFull = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const navigate = useNavigate();

  useEffect( () => {
    dispatch(fetchFilmAction(({
      id: id as string,
      navigate: () => {
        navigate('/not-found');
      }
    })));
    dispatch(fetchReviewsAction(id as string));
  },[ id, dispatch ]);

  const buildFilmFullCard = () => {
    if (!film) {
      return null;
    }

    return (
      <Suspense fallback={<Loader />} >

        <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={`${film.backgroundImage}`} alt={film.name}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <FilmCardButton id={film.id} />
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <FilmCardPoster posterImage={film.posterImage} name={film.name}/>
              <FilmCardDesc/>
            </div>
          </div>
        </section>
      </Suspense>
    );
  };

  return (
    buildFilmFullCard()
  );

};

export default FilmCardFull;
