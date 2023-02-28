import React from 'react';
import GenreItem from "./elements/GenreItem";

const CatalogGenresList = (): JSX.Element => {
  return (
    <ul className="catalog__genres-list">
        <GenreItem isActive={true} >All genres</GenreItem>
        <GenreItem >Comedies</GenreItem>
        <GenreItem >Crime</GenreItem>
        <GenreItem >Documentary</GenreItem>
        <GenreItem >Dramas</GenreItem>
        <GenreItem >Horror</GenreItem>
        <GenreItem >Kids & Family</GenreItem>
        <GenreItem >Romance</GenreItem>
        <GenreItem >Sci-Fi</GenreItem>
        <GenreItem >Thrillers</GenreItem>
    </ul>
  );
};

export default CatalogGenresList;
