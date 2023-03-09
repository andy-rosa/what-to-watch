import React from 'react';
import {EvtFormProps} from '../AddReviewForm';

export interface ReviewRatingItemProps {
  value: number;
  formDataHandler: (evt: EvtFormProps) => void;
}

const ReviewRatingItem = ({value, formDataHandler}: ReviewRatingItemProps) => (
  <>
    <input
      className="rating__input"
      id={`star-${value}`}
      type="radio"
      name="rating"
      value={value}
      onChange={formDataHandler}
    />
    <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
  </>
);

export default ReviewRatingItem;
