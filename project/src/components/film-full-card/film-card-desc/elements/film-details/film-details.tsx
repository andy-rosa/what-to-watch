import {Films} from '../../../../../types/films';
import {transformDurationTime} from '../../../../../helpers/transform-duration-time';
import {useAppSelector} from '../../../../../hooks/use-app-selector';
import {getFilm} from '../../../../../store/films/selectors/get-film/get-film';

type FilmDetailsPick = Pick<Films, 'director' | 'starring' | 'runTime' | 'genre' | 'released'>

const FilmDetails = () => {
  const {director, starring, runTime, released, genre} = useAppSelector(getFilm) as FilmDetailsPick;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              starring.map((name) => (
                <span key={name}>
                  {name}, <br/>
                </span>))
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{transformDurationTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

export default FilmDetails;
