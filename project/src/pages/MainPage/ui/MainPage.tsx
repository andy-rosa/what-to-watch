import React from 'react';
import MainFilmCard from '../../../components/sections/MainFilmCard/MainFilmCard';
import Footer from '../../../components/Footer/Footer';
import Catalog from '../../../components/sections/Catalog/Catalog';

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
