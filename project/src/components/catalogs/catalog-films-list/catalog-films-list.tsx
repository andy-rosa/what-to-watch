import {useEffect} from 'react';
import FilmCard, {FilmCardProps} from '../../film-card/film-card';
import {useParams} from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import {getFilteredFilms} from '../../../store/films/selectors/get-filtered-films/get-filtered-films';
import {getNonRepeatFilmCard} from '../../../helpers/get-non-repeat-films-card';
import Loader from '../../loader/loader';
import {useAppSelector} from '../../../hooks/use-app-selector';
import { fetchFilmsSimilarAction } from '../../../store/films/actions/fetch-films-similar-action/fetch-films-similar-action.api';
import { fetchFilmsAction } from '../../../store/films/actions/fetch-films-action/fetch-films-action.api';
import {STEP} from '../../sections/catalog/catalog';

interface CatalogFilmsListProps {
  range?: number;
  handleClick?: () => void;
}

const CatalogFilmsList = ({range = STEP, handleClick}: CatalogFilmsListProps) => {
  const {id: idUrl} = useParams();
  const films = useAppSelector(getFilteredFilms);
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector((state) => state.films);

  useEffect(() => {
    if (idUrl) {
      dispatch(fetchFilmsSimilarAction(idUrl));
    } else {
      dispatch(fetchFilmsAction());
    }
  },[idUrl]);

  const createFilmCard = ({posterImage, id, name, videoLink}: FilmCardProps) => (
    <FilmCard
      key={id}
      id={id}
      name={name}
      posterImage={posterImage}
      videoLink={videoLink}
    />
  );

  const createCurrentFilmsList = () => {
    if (idUrl) {
      return getNonRepeatFilmCard(films, idUrl).map(createFilmCard);
    }
    return films.slice(0, range).map(createFilmCard);
  };

  return (
    <>
      <div className="catalog__films-list" data-testid={'films-list'}>
        {
          isLoading
            ? <Loader />
            : createCurrentFilmsList()
        }
      </div>
      {
        range < films.length &&
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={handleClick}
            data-testid={'btn-show-more'}
          >
            Show more
          </button>
        </div>
      }
    </>
  );
};

export default CatalogFilmsList;
