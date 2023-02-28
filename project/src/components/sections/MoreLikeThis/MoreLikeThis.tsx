import React from 'react';
import FilmCard from "../../FilmCard/FilmCard";

const MoreLikeThis = () => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </section>
  );
};

export default MoreLikeThis;
