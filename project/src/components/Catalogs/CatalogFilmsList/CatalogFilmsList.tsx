import React, {useEffect, useState} from 'react';
import FilmCard, {FilmCardProps} from '../../FilmCard/FilmCard';
import axios from 'axios';
import {Films} from '../../../mocks/films';
import {useParams} from 'react-router-dom';

export type CatalogFilmsListProps = {
  url: string;
}

const CatalogFilmsList = ({url}: CatalogFilmsListProps) => {
  const [films, setFilms] = useState<Films[]>([]);
  const {id: idUrl} = useParams();

  useEffect( () => {
    axios.get<Films[]>(url)
      .then((result) =>
        setFilms(result.data)
      );
  },[url]);

  const getFilmCard = () => {
    let filmList = films;
    if (idUrl) {
      filmList = filmList.filter((film) => String(film.id) !== idUrl );
    }
    return filmList;
  };

  return (
    <div className="catalog__films-list">
      {
        getFilmCard().map(
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
