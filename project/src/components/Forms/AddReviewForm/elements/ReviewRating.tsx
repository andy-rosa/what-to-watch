import React from 'react';
import ReviewRatingItem from './ReviewRatingItem';
import {EvtFormProps, FormProps} from '../AddReviewForm';

const MAX_RATING = 10;

type ReviewRatingProps = {
  formDataHandler: (evt: EvtFormProps) => void;
}

const ReviewRating = ({formDataHandler}: ReviewRatingProps) => {
  const rating = Array.from({length: MAX_RATING});
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          rating.map((_, value) =>
            // eslint-disable-next-line react/no-array-index-key
            <ReviewRatingItem value={value + 1} key={value + 1} formDataHandler={formDataHandler}/>
          )
        }
      </div>
    </div>
  );
};

export default ReviewRating;
