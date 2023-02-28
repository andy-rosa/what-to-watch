import React from 'react';

export interface GenreItemProps {
  children: string
  isActive?: boolean
}

const GenreItem = (props: GenreItemProps) => {
  const {
    children,
    isActive = false
  } = props;

  return (
    <li className={`catalog__genres-item ${ isActive ? 'catalog__genres-item--active' : ''}`} >
      <a href="#" className="catalog__genres-link">{children}</a>
    </li>
  );
};

export default GenreItem;
