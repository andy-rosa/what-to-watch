import React from 'react';
import ReviewRatingItem from './ReviewRatingItem';

const MAX_RATING = 10;

const ReviewRating = () => {
  const rating = Array.from({length: MAX_RATING});
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          rating.map((_, value) =>
            // eslint-disable-next-line react/no-array-index-key
            <ReviewRatingItem value={value + 1} key={value + 1}/>
          )
        }
      </div>
    </div>
  );
};

export default ReviewRating;
