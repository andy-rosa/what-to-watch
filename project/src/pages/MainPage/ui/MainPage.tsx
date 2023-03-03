import React from 'react';
import MainFilmCard from '../../../components/sections/MainFilmCard/MainFilmCard';
import Catalog from '../../../components/sections/Catalog/Catalog';
import Footer from '../../../components/Footer/Footer';

const MainPage = (): JSX.Element => (
  <div>
    <MainFilmCard title={'The Grand Budapest Hotel'} genre={'Drama'} year={2014} />

    <div className="page-content">
      <Catalog />
      <Footer />
    </div>
  </div>
);

export default MainPage;
