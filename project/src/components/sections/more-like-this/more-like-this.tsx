import CatalogFilmsList from '../../catalogs/catalog-films-list/catalog-films-list';

const MoreLikeThis = () => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>
    <CatalogFilmsList />
  </section>
);

export default MoreLikeThis;
