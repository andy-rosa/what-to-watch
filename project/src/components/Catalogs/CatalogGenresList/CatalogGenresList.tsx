import React from 'react';
import GenreItem from './elements/GenreItem';
import {GenreName} from '../../../store/Genre/model/types/genreSchema';

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

