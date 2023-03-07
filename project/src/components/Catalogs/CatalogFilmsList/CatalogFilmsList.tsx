import React, {useEffect, useState} from 'react';
import FilmCard, {FilmCardProps} from '../../FilmCard/FilmCard';
import axios from 'axios';
import {Films} from '../../../mocks/films';

export type CatalogFilmsListProps = {
  url: string;
}

const CatalogFilmsList = ({url}: CatalogFilmsListProps) => {
  const [films, setFilms] = useState<Films[] | null>(null);

  useEffect( () => {
    axios.get<Films[]>(url)
      .then((result) =>
        setFilms(result.data)
      );
  },[films]);

  return (
    <div className="catalog__films-list">
      {
        films && films.map(
          ({posterImage, id, name}: FilmCardProps) => (
            <FilmCard
              key={id}
              id={id}
              name={name}
              posterImage={posterImage}
            />))
      }
    </div>
  );
};

export default CatalogFilmsList;
