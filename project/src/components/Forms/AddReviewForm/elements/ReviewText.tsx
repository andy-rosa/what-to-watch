import React from 'react';
import {EvtFormProps, FormProps} from '../AddReviewForm';

type ReviewTextProps = {
  formDataHandler: (evt: EvtFormProps) => void;
  form: FormProps;
}

const ReviewText = ({formDataHandler, form}: ReviewTextProps) => (
  <div className="add-review__text">
    <textarea className="add-review__textarea" name="review-text" id="review-text"
      placeholder="Review text" onChange={formDataHandler} value={form['review-text']}
    >
    </textarea>
    <div className="add-review__submit">
      <button className="add-review__btn" type="submit">Post</button>
    </div>
  </div>
);

export default ReviewText;
