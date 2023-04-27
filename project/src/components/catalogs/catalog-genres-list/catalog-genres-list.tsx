import { GenreName } from '../../../types/genre';
import GenreItem from './elements/genre-item/genre-item';

const CatalogGenresList = (): JSX.Element => (
  <ul className="catalog__genres-list" data-testid={'genres-list'}>
    {
      (Object.values(GenreName)).map(
        (genre) =>
          <GenreItem name={genre} key={genre} />
      )
    }
  </ul>
);

export default CatalogGenresList;

