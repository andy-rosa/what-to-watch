import React, {Suspense, useEffect} from 'react';
import Header from '../../Headers/Header';
import FilmCardDesc from '../../FilmFullCard/FilmCardDesc/FilmCardDesc';
import FilmCardPoster from '../../FilmFullCard/FilmCardPoster/FilmCardPoster';
import FilmCardButton from '../../FilmFullCard/FilmCardControllButton/FilmCardControllButton';
import {useParams} from 'react-router-dom';
import Loader from '../../Loader/Loader';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getFilm} from '../../../store/Films/selectors/getFilm/getFilm';
import {fetchFilmAction} from '../../../store/Films/actions/fetchFilmAction/fetchFilmActions.api';

const FilmCardFull = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);

  useEffect( () => {
    dispatch(fetchFilmAction(id as string));
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

                <FilmCardButton id={film.id}/>
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
