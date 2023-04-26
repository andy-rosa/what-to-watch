import React, {useEffect} from 'react';
import Header from '../../Headers/Header';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getPromoFilm} from '../../../store/Films/selectors/getPromoFilm/getPromoFilm';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {fetchPromoFilmAction} from '../../../store/Films/actions/fetchPromoFilmAction/fetchPromoFilmAction.api';
import {generatePath, Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../Routers/AppRouter/config/routerConfig';
import {getUserAuthStatus} from '../../../store/User/selectors/getUserAuthStatus/getUserAuthStatus';
import {getFavoriteListFilm} from '../../../store/Films/selectors/getFavoriteListFilm/getFavoriteListFilm';
import {AuthorizationStatus} from '../../../types/user';
import {
  fetchFavoriteListAction
} from '../../../store/Films/actions/fetchFavoriteListAction/fetchFavoriteListAction.api';
import {
  changeFavoriteFilmStatusAction,
  ChangeType
} from '../../../store/Films/actions/changeFavoriteFilmStatusAction/changeFavoriteFilmStatus.api';
import {getFilm} from '../../../store/Films/selectors/getFilm/getFilm';

const MainFilmCard = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getPromoFilm);
  const authStatus = useAppSelector(getUserAuthStatus);
  const favoriteFilm = useAppSelector(getFilm);
  const favoriteListCounter = useAppSelector(getFavoriteListFilm).length;
  const navigate = useNavigate();

  const handleFavoriteFilmAdd = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(RoutePath.sign_in);
      return;
    }
    dispatch(changeFavoriteFilmStatusAction({id, type: ChangeType.Add}));
  };

  const handleFavoriteFilmRemove = () => {
    dispatch(changeFavoriteFilmStatusAction({id, type: ChangeType.Remove}));
  };

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
    dispatch(fetchFavoriteListAction());
  }, [favoriteFilm]);

  if (!film) {
    return null;
  }

  const {id} = film;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={generatePath(RoutePath.player, {id})} className="btn btn--play film-card__button"
                data-testid={'link-button-play'}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              {film.isFavorite
                ? (
                  <button className="btn btn--list film-card__button" type="button" data-testid={'my-list-button'}
                    onClick={handleFavoriteFilmRemove}
                  >
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    <span>My list</span>
                    {favoriteListCounter !== 0 && <span className="film-card__count">{favoriteListCounter}</span>}
                  </button>
                )
                : (
                  <button className="btn btn--list film-card__button" type="button" data-testid={'my-list-button'}
                    onClick={handleFavoriteFilmAdd}
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    {favoriteListCounter !== 0 && <span className="film-card__count">{favoriteListCounter}</span>}
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFilmCard;
