import React, {useEffect, useState} from 'react';
import FilmCard, {FilmCardProps} from '../../FilmCard/FilmCard';
import axios from 'axios';
import {Films} from '../../../mocks/films';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getGenreActiveGenre} from '../../../store/Genre/model/selectors/getGenreActiveGenre/getGenreActiveGenre';
import {GenreName} from '../../../store/Genre/model/types/genreSchema';

export type CatalogFilmsListProps = {
  url: string;
}

const CatalogFilmsList = ({url}: CatalogFilmsListProps) => {
  const [films, setFilms] = useState<Films[]>([]);
  const {id: idUrl} = useParams();

  const activeGenre = useSelector(getGenreActiveGenre);

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

  const GenreFilter: Record<GenreName, string> = {
    [GenreName.ALL_GENRES]: 'All genres',
    [GenreName.COMEDIES]: 'Comedy',
    [GenreName.CRIME]: 'Crime',
    [GenreName.DOCUMENTARY]: 'Documentary',
    [GenreName.DRAMAS]: 'Drama',
    [GenreName.HORROR]: 'Horror',
    [GenreName.KIDS_AND_FAMILY]: 'Kids & Family',
    [GenreName.ROMANCE]: 'Romance',
    [GenreName.SCI_FI]: 'Sci-Fi',
    [GenreName.THRILLERS]: 'Thriller',
  };

  return (
    <div className="catalog__films-list">
      {
        getFilmCard().filter((film) => {
          if (GenreFilter[activeGenre] === GenreName.ALL_GENRES) {
            return true;
          }
          return film.genre === GenreFilter[activeGenre];
        }).map(
          ({posterImage, id, name, videoLink}: FilmCardProps) => (
            <FilmCard
              key={id}
              id={id}
              name={name}
              posterImage={posterImage}
              videoLink={videoLink}
            />))
      }
    </div>
  );
};

export default CatalogFilmsList;
