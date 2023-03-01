import React from 'react';
import FilmCard from '../../FilmCard/FilmCard';

export interface CatalogFilmsListProps {
  lengthList: number;
}

const CatalogFilmsList = ({lengthList}: CatalogFilmsListProps) => {
  const mockFilms = Array.from({length: lengthList});

  return (
    <div className="catalog__films-list">
      {
        mockFilms.map(
          // eslint-disable-next-line react/no-array-index-key
          (_, key) => <FilmCard key={key} />
        )
      }
    </div>
  );
};

export default CatalogFilmsList;
