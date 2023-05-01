import {useEffect, useState} from 'react';
import CatalogGenresList from '../../catalogs/catalog-genres-list/catalog-genres-list';
import CatalogFilmsList from '../../catalogs/catalog-films-list/catalog-films-list';
import {getGenreSelected} from '../../../store/genre/selectors/get-genre-selected/get-genre-selected';
import { useAppSelector } from '../../../hooks/use-app-selector';

export const STEP = 8;

const Catalog = () => {
  const [range, setRange] = useState<number>(STEP);
  const selectedGenre = useAppSelector(getGenreSelected);

  const handleClick = () => {
    setRange(range + STEP);
  };

  useEffect(() => {
    if (range !== STEP){
      setRange(STEP);
    }
  },[selectedGenre]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <CatalogGenresList/>
      <CatalogFilmsList range={range} handleClick={handleClick}/>
    </section>
  );
};

export default Catalog;
