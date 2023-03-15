import React from 'react';
import GenreItem from './elements/GenreItem';

const CatalogGenresList = (): JSX.Element => (
  <ul className="catalog__genres-list">
    <GenreItem name={'All genres'}/>
    <GenreItem name={'Comedies'}/>
    <GenreItem name={'Crime'}/>
    <GenreItem name={'Documentary'}/>
    <GenreItem name={'Dramas'}/>
    <GenreItem name={'Horror'}/>
    <GenreItem name={'Kids & Family'}/>
    <GenreItem name={'Romance'}/>
    <GenreItem name={'Sci-Fi'}/>
    <GenreItem name={'Thrillers'}/>
  </ul>
);

export default CatalogGenresList;
