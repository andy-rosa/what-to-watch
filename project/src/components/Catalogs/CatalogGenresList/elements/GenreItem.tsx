import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGenreActiveGenre} from '../../../../store/Genre/model/selectors/getGenreActiveGenre/getGenreActiveGenre';
import {genreActions} from '../../../../store/Genre/model/slice/genreSlice';
import {GenreName} from '../../../../store/Genre/model/types/genreSchema';

export interface GenreItemProps {
  name: string;
}

const GenreItem = ({name}: GenreItemProps) => {
  const dispatch = useDispatch();
  const activeGenre = useSelector(getGenreActiveGenre);

  const changeGenreHandler = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    dispatch(genreActions.chooseGenre(name as GenreName));
  };

  return (
    <li className={`catalog__genres-item ${activeGenre === name ? 'catalog__genres-item--active' : ''}`}>
      <a
        onClick={changeGenreHandler}
        href="project/src/components/CatalogGenresList/elements#"
        className="catalog__genres-link"
      >
        {name}
      </a>
    </li>
  );
};
export default GenreItem;
