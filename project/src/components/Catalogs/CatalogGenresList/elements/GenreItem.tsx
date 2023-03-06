import React from 'react';

export interface GenreItemProps {
  name: string;
  isActive?: boolean;
}

const GenreItem = ({name, isActive = false}: GenreItemProps) => (
  <li className={`catalog__genres-item ${ isActive ? 'catalog__genres-item--active' : ''}`} >
    <a href="project/src/components/CatalogGenresList/elements#" className="catalog__genres-link">{name}</a>
  </li>
);

export default GenreItem;
