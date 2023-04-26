import React, {ChangeEvent, memo} from 'react';

interface ReviewTextProps {
  value: string;
  onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
  disabledButton?: boolean;
}

const ReviewText = ({value, onChange, disabledButton = false}: ReviewTextProps) => (
  <div className="add-review__text">
    <textarea className="add-review__textarea" name="review-text" id="review-text"
      placeholder="Review text" value={value}
      onChange={onChange}
    >
    </textarea>
    <div className="add-review__submit">
      <button className="add-review__btn" type="submit" disabled={disabledButton}>Post</button>
    </div>
  </div>
);

export default memo(ReviewText);
