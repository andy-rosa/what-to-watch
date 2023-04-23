import React, {memo, SyntheticEvent, useCallback, useState} from 'react';
import ReviewText from './elements/ReviewRatingText/ReviewText';
import ReviewRating from './elements/ReviewRating/ReviewRating';

const AddReviewForm = (): JSX.Element => {
  const [text, setText] = useState('');
  const [, setRating] = useState('');

  const changeRatingHandler = useCallback((evt: SyntheticEvent<HTMLInputElement>) => {
    setRating(evt.currentTarget.value);
  }, []);

  const changeTextHandler = useCallback((evt: SyntheticEvent<HTMLTextAreaElement>) => {
    setText(evt.currentTarget.value);
  }, []);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <ReviewRating onChange={changeRatingHandler}/>
        <ReviewText onChange={changeTextHandler} value={text} />
      </form>
    </div>
  );
};

export default memo(AddReviewForm);
