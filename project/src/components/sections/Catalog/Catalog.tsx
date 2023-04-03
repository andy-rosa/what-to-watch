import React from 'react';
import CatalogGenresList from '../../Catalogs/CatalogGenresList/CatalogGenresList';
import CatalogFilmsList from '../../Catalogs/CatalogFilmsList/CatalogFilmsList';

const Catalog = () => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <CatalogGenresList />
    <CatalogFilmsList />
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>
);

export default Catalog;
