import React, {SyntheticEvent} from 'react';
import {GenreName} from '../../../../../types/genre';
import {useAppDispatch} from '../../../../../hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {getGenreSelected} from '../../../../../store/Genre/selectors/getGenreSelected/getGenreSelected';
import {genreActions} from '../../../../../store/Genre/slice/genreSlice';

export interface GenreItemProps {
  name: GenreName;
}

const GenreItem = ({name}: GenreItemProps) => {
  const dispatch = useAppDispatch();
  const selectedGenre = useSelector(getGenreSelected);

  const handleClick = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(genreActions.select(name));
  };

  return (
    <li className={`catalog__genres-item ${
      selectedGenre === name
        ? 'catalog__genres-item--active'
        : ''
    }`}
    >
      <a
        onClick={handleClick}
        href="project/src/components/CatalogGenresList/elements#"
        className="catalog__genres-link"
      >
        {name}
      </a>
    </li>
  );
};
export default GenreItem;
