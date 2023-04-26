import React, {useEffect} from 'react';
import {generatePath, Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../routers/app-router/config/router-config';
import {Films} from '../../../types/films';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getUserAuthStatus} from '../../../store/user/selectors/get-user-auth-status/get-user-auth-status';
import {AuthorizationStatus} from '../../../types/user';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import { changeFavoriteFilmStatusAction, ChangeType } from '../../../store/films/actions/change-favorite-film-status-action/change-favorite-film-status-action.api';
import {getFilmFavoriteStatus} from '../../../store/films/selectors/get-film-favorite-status/get-film-favorite-status';
import {getFavoriteListFilm} from '../../../store/films/selectors/get-favorite-list-film/get-favorite-list-film';
import {
  fetchFavoriteListAction
} from '../../../store/films/actions/fetch-favorite-list-action/fetch-favorite-list-action.api';

const FilmCardButton = ({id}: Pick<Films, 'id'>) => {
  const authStatus = useAppSelector(getUserAuthStatus);
  const favoriteListCounter = useAppSelector(getFavoriteListFilm).length;
  const isFavorite = useAppSelector(getFilmFavoriteStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteListAction());
    }
  });

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

  return (
    <div className="film-card__buttons">
      <Link to={generatePath(RoutePath.player, {id})} className="btn btn--play film-card__button"
        data-testid={'link-button-play'}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {isFavorite
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

      {authStatus === AuthorizationStatus.Auth &&
        <Link to={generatePath(RoutePath.add_review, {id})} className={'btn film-card__button'}>
        Add review
        </Link>}
    </div>
  );
};

export default FilmCardButton;
