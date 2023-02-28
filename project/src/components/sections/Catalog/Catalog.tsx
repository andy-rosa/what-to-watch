import React from 'react';
import CatalogGenresList from '../../CatalogGenresList/CatalogGenresList';
import CatalogFilmsList from '../../CatalogFilmsList/CatalogFilmsList';

const MOCK_LENGTH = 20;

const Catalog = () => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <CatalogGenresList />
    <CatalogFilmsList lengthList={MOCK_LENGTH} />
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>
);

export default Catalog;
