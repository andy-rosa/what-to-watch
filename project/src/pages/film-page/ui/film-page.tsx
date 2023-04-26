import React from 'react';
import Footer from '../../../components/footer/footer';
import MoreLikeThis from '../../../components/sections/more-like-this/more-like-this';
import FilmCardFull from '../../../components/sections/film-card-full/film-card-full';
import {useParams} from 'react-router-dom';

const FilmPage = () => {
  const { id } = useParams();

  return (
    <div>
      <FilmCardFull/>
      <div className="page-content">
        <MoreLikeThis id={id as string}/>
        <Footer/>
      </div>
    </div>
  );
};

export default FilmPage;
