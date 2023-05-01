import {FilmCardProps} from '../../film-card';

const CardPoster = ({posterImage, name}: Pick<FilmCardProps, 'posterImage' | 'name'>) => (
  <>
    <div className="small-film-card__image" data-testid={'card-poster'}>
      <img
        alt={name}
        src={posterImage}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-film-card__title">
      <span className={'small-film-card__link'}>
        {name}
      </span>
    </h3>
  </>
);

export default CardPoster;
