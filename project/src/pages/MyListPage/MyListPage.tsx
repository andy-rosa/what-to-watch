import React from 'react';
import Footer from "../../components/Footer/Footer";
import FilmCard from "../../components/FilmCard/FilmCard";
import Header from "../../components/Headers/Header";

const MyListPage = () => {
  return (
    <div className="user-page">
      <Header>My list <span className="user-page__film-count">9</span></Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyListPage;
