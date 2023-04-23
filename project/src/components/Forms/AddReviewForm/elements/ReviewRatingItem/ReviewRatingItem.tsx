import React, {ChangeEvent, memo} from 'react';

export interface ReviewRatingItemProps {
  value: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const ReviewRatingItem = ({value, onChange}: ReviewRatingItemProps) => (
  <>
    <input
      className="rating__input"
      id={`star-${value}`}
      type="radio"
      name="rating"
      value={value}
      onChange={onChange}
      data-testid={'rating-item'}
    />
    <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
  </>
);

export default memo(ReviewRatingItem);
