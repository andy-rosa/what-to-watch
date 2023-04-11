import React, {ChangeEvent, memo} from 'react';
import ReviewRatingItem from './ReviewRatingItem';

const MAX_RATING = 10;

type ReviewRatingProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const ReviewRating = ({onChange}: ReviewRatingProps) => {
  const rating = Array.from({length: MAX_RATING});
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          rating.map((_, value) =>
            (
              // eslint-disable-next-line react/no-array-index-key
              <ReviewRatingItem value={MAX_RATING - value} key={MAX_RATING - value}
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
