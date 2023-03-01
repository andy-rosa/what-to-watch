import React from 'react';
import Footer from '../../components/Footer/Footer';
import MoreLikeThis from '../../components/sections/MoreLikeThis/MoreLikeThis';
import FilmCardFull from '../../components/sections/FilmCardFull/FilmCardFull';

const FilmPage = () => (
  <div>
    <FilmCardFull />
    <div className="page-content">
      <MoreLikeThis />
      <Footer />
    </div>
  </div>
);

export default FilmPage;
