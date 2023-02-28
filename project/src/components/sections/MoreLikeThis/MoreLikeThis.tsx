import React from 'react';
import CatalogFilmsList from '../../CatalogFilmsList/CatalogFilmsList';

const MOCK_LENGTH = 4;

const MoreLikeThis = () => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>
    <CatalogFilmsList lengthList={MOCK_LENGTH} />
  </section>
);

export default MoreLikeThis;
