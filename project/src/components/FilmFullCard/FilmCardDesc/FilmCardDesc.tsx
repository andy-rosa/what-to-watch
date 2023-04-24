import React, {useEffect, useState} from 'react';
import FilmCardNav from './elements/FilmCardNav/FilmCardNav';
import FilmReviews from '../FilmReviews/FilmReviews';
import {Films} from '../../../types/films';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import FilmOverview from '../FilmOverview/FilmOverview';
import FilmDetails from '../FilmDetails/FilmDetails';

export type ActiveDescription ='Overview' | 'Details' | 'Reviews';

const FilmCardDesc = () => {
  const [activeTab, setActiveTab] = React.useState<ActiveDescription>('Overview');
  const [film, setFilm] = useState<Films | null>(null);
  const { id } = useParams();

  useEffect( () => {
    axios.get<Films>(`https://12.react.pages.academy/wtw/films/${id as string}`)
      .then((res) => setFilm(res.data)
      );
  },[ id ]);

  const getActiveInfo = () => {
    if (!film) {
      return null;
    }
    switch (activeTab) {
      case 'Overview':
        return <FilmOverview rating={film.rating} scoresCount={film.scoresCount} director={film.director} starring={film.starring} description={film.description}/>;
      case 'Details':
        return <FilmDetails director={film.director} starring={film.starring} runTime={film.runTime} genre={film.genre} released={film.released} />;
      case 'Reviews':
        return <FilmReviews/>;
    }
  };

  return (
    <div className="film-card__desc">
      <FilmCardNav changeActiveTab={setActiveTab} activeTab={activeTab}/>
      {getActiveInfo()}
    </div>
  );
};

export default FilmCardDesc;
