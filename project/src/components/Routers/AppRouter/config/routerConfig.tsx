import {RouteObject} from 'react-router-dom';
import MainPage from '../../../../pages/MainPage/MainPage';
import FilmPage from '../../../../pages/FilmPage/FilmPage';
import MyListPage from '../../../../pages/MyListPage/MyListPage';
import PlayerPage from '../../../../pages/PlayerPage/PlayerPage';
import SignInPage from '../../../../pages/SignInPage/SignInPage';
import AddReviewPage from '../../../../pages/AddReviewPage/AddReviewPage';
import NotFoundPage from '../../../../pages/NotFoundPage/NotFoundPage';
import PrivateRoute, {AuthorizationStatus} from '../../PrivetRouter/PrivetRouter';

export enum AppRoute {
  MAIN = 'main',
  FILM = 'film',
  MY_LIST = 'my_list',
  PLAYER = 'player',
  SIGN_IN = 'sign_in',
  ADD_REVIEW = 'add_review',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.FILM]: '/films/:id',
  [AppRoute.MY_LIST]: '/mylist',
  [AppRoute.PLAYER]: '/player/:id',
  [AppRoute.SIGN_IN]: '/login',
  [AppRoute.ADD_REVIEW]: '/films/:id/review',
  [AppRoute.NOT_FOUND]: '*',
};


export const routeConfig: RouteObject[] = [
  {
    path: RoutePath.main,
    element: < MainPage />
  },
  {
    path: RoutePath.film,
    element: < FilmPage />
  },
  {
    path: RoutePath.my_list,
    element:
      <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
        < MyListPage />
      </PrivateRoute>
  },
  {
    path: RoutePath.player,
    element: < PlayerPage />
  },
  {
    path: RoutePath.sign_in,
    element: < SignInPage />
  },
  {
    path: RoutePath.add_review,
    element:
      <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
        < AddReviewPage />
      </PrivateRoute>
  },
  {
    path: RoutePath.not_found,
    element: < NotFoundPage />
  }
];
