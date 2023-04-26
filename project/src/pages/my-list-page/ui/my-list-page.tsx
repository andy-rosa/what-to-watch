import React from 'react';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/headers/header';
import FavoriteList from '../../../components/favorite-list/favorite-list';
import { getFavoriteListFilm } from '../../../store/films/selectors/get-favorite-list-film/get-favorite-list-film';
import { useAppSelector } from '../../../hooks/useAppSelector';

const MyListPage = () => {
  const favoriteCounter = useAppSelector(getFavoriteListFilm).length;
  return (
    <div className="user-page">
      <Header>My list <span className="user-page__film-count">{favoriteCounter}</span></Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FavoriteList/>
      </section>
      <Footer/>
    </div>
  );
};

export default MyListPage;
