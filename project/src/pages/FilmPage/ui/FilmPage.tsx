import React from 'react';
import Footer from '../../../components/Footer/Footer';
import MoreLikeThis from '../../../components/sections/MoreLikeThis/MoreLikeThis';
import FilmCardFull from '../../../components/sections/FilmCardFull/FilmCardFull';
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
