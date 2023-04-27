import { getTextRating } from '../../../../../../../helpers/get-text-rating';
import {Films} from '../../../../../../../types/films';

export type FilmCardRatingProps = 'rating' | 'scoresCount'

const FilmCardRating = ({rating, scoresCount}: Pick<Films, FilmCardRatingProps>) => (
  <div className="film-rating" data-testid={'film-card-rating'}>
    <div className="film-rating__score">{rating}</div>
    <p className="film-rating__meta">
      <span className="film-rating__level">{getTextRating(rating)}</span>
      <span className="film-rating__count">{scoresCount} ratings</span>
    </p>
  </div>
);

export default FilmCardRating;
