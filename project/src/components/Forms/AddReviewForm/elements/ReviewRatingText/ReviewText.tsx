import React, {ChangeEvent, memo} from 'react';

interface ReviewTextProps {
  value: string;
  onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReviewText = ({value, onChange}: ReviewTextProps) => (
  <div className="add-review__text">
    <textarea className="add-review__textarea" name="review-text" id="review-text"
      placeholder="Review text" value={value}
      onChange={onChange}
    >
    </textarea>
    <div className="add-review__submit">
      <button className="add-review__btn" type="submit">Post</button>
    </div>
  </div>
);

export default memo(ReviewText);
