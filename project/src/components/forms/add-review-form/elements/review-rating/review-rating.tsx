import {ChangeEvent, memo} from 'react';
import ReviewRatingItem from '../review-rating-item/review-rating-item';

const MAX_RATING = 10;

type ReviewRatingProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const generateKey = (pre: number):string => `${ pre }_${ new Date().getTime() }`;

const ReviewRating = ({onChange}: ReviewRatingProps) => {
  const rating = Array.from({length: MAX_RATING});
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          rating.map((_, value) =>
            (
              <ReviewRatingItem value={MAX_RATING - value} key={generateKey(value)}
                onChange={onChange}
              />
            )
          )
        }
      </div>
    </div>
  );
};

export default memo(ReviewRating);
