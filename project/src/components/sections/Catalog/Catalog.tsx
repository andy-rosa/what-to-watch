import React, {useEffect} from 'react';
import CatalogGenresList from '../../Catalogs/CatalogGenresList/CatalogGenresList';
import CatalogFilmsList from '../../Catalogs/CatalogFilmsList/CatalogFilmsList';
import {getGenreSelected} from '../../../store/Genre/selectors/getGenreSelected/getGenreSelected';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const STEP = 8;

const Catalog = () => {
  const [range, setRange] = React.useState<number>(STEP);
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
