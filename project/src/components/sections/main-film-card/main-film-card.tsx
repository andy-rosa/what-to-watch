import {useEffect} from 'react';
import Header from '../../headers/header';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {getPromoFilm} from '../../../store/films/selectors/get-promo-film/get-promo-film';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import {fetchPromoFilmAction} from '../../../store/films/actions/fetch-promo-film-action/fetch-promo-film-action.api';
import {generatePath, Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../routers/app-router/config/router-config';
import {getUserAuthStatus} from '../../../store/user/selectors/get-user-auth-status/get-user-auth-status';
import {getFavoriteListFilm} from '../../../store/films/selectors/get-favorite-list-film/get-favorite-list-film';
import {AuthorizationStatus} from '../../../types/user';
import {
  fetchFavoriteListAction
} from '../../../store/films/actions/fetch-favorite-list-action/fetch-favorite-list-action.api';
import {
  changeFavoriteFilmStatusAction,
  ChangeType
} from '../../../store/films/actions/change-favorite-film-status-action/change-favorite-film-status-action.api';
import {getFilm} from '../../../store/films/selectors/get-film/get-film';
import {Films} from '../../../types/films';

const MainFilmCard = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getPromoFilm) as Films;
  const authStatus = useAppSelector(getUserAuthStatus);
  const favoriteFilm = useAppSelector(getFilm);
  const favoriteListCounter = useAppSelector(getFavoriteListFilm).length;
  const navigate = useNavigate();
  const {id} = film;


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
