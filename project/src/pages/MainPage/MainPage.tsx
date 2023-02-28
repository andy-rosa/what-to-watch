import React from 'react';
import MainFilmCard from "../../components/section/MainFilmCard/MainFilmCard";
import Catalog from "../../components/section/Catalog/Catalog";
import Footer from "../../components/ui/Footer/Footer";

const MainPage = (): JSX.Element => {
  return (
    <div>
      <MainFilmCard title={'The Grand Budapest Hotel'} genre={'Drama'} year={2014} />

      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
