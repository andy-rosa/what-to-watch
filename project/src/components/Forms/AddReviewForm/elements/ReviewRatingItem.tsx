import React from 'react';

export interface ReviewRatingItemProps {
  value: number;
}

const ReviewRatingItem = ({value}: ReviewRatingItemProps) => (
  <>
    <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value}/>
    <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
  </>
);

export default ReviewRatingItem;
