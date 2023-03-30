import React from 'react';
import { GenreName } from '../../../types/genre';
import GenreItem from './elements/GenreItem';

const CatalogGenresList = (): JSX.Element => (
  <ul className="catalog__genres-list">
    {
      (Object.values(GenreName)).map(
        (genre) =>
          <GenreItem name={genre} key={genre} />
      )
    }
  </ul>
);

export default CatalogGenresList;

