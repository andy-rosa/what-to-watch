import React, {useEffect, useState} from 'react';
import Header from '../../../components/Headers/Header';
import AddReviewForm from '../../../components/Forms/AddReviewForm/AddReviewForm';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Films} from '../../../types/films';

const AddReviewPage = () => {
  const [film, setFilm] = useState<Films | null>(null);

  const { id } = useParams();

  useEffect( () => {
    axios.get<Films>(`https://12.react.pages.academy/wtw/films/${id as string}`)
      .then((res) => setFilm(res.data)
      );
  },[ id ]);

  return (
    <div>
      { film &&
      <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>

          <Header isShowBreadcrumb/>
          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218"
              height="327"
            />
          </div>
        </div>

        <AddReviewForm/>
      </section>}
    </div>
  );
};

export default AddReviewPage;
