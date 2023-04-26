import React from 'react';
import CatalogFilmsList from '../../catalogs/catalog-films-list/catalog-films-list';

export type MoreLikeThisProps = {
  id: string;
}

const MoreLikeThis = ({id}: MoreLikeThisProps) => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>
    <CatalogFilmsList />
  </section>
);

export default MoreLikeThis;
