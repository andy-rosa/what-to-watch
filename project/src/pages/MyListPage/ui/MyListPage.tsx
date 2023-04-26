import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Headers/Header';
import FavoriteList from '../../../components/FavoriteList/FavoriteList';
import { getFavoriteListFilm } from '../../../store/Films/selectors/getFavoriteListFilm/getFavoriteListFilm';
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
