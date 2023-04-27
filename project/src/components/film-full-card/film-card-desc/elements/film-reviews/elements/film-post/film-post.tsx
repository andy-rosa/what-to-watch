import dayjs from 'dayjs';
import {Reviews} from '../../../../../../../types/reviews';


const FilmPost = ({rating, comment, user, date}: Reviews) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">
        {comment}
      </p>

      <footer className="review__details">
        <cite className="review__author">{user.name}</cite>
        <time className="review__date" dateTime="2016-12-24">{dayjs(date).format('MMMM DD, YYYY') }</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>
);

export default FilmPost;
