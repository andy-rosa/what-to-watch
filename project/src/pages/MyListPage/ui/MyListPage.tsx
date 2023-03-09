import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Headers/Header';
import CatalogFilmsList from '../../../components/Catalogs/CatalogFilmsList/CatalogFilmsList';

const MyListPage = () => (
  <div className="user-page">
    <Header>My list <span className="user-page__film-count">9</span></Header>
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <CatalogFilmsList url={'https://12.react.pages.academy/wtw/films'}/>
    </section>
    <Footer />
  </div>
);

export default MyListPage;
