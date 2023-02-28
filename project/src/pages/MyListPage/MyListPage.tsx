import React from 'react';
import Footer from "../../components/ui/Footer/Footer";
import MyListHeader from "../../components/ui/Headers/MyListHeader/MyListHeader";
import FilmCard from "../../components/ui/FilmCard/FilmCard";

const MyListPage = () => {
  return (
    <div className="user-page">
      <MyListHeader />
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
