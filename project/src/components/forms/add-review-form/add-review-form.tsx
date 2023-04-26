import React, {memo, SyntheticEvent, useCallback, useState} from 'react';
import ReviewText from './elements/review-text/review-text';
import ReviewRating from './elements/review-rating/review-rating';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {useParams} from 'react-router-dom';
import {postReviewAction} from '../../../store/reviews/actions/post-review/post-review-action.api';
import TextError from '../../text-error/text-error';


enum Error {
  None = '',
  Required = 'Comment is required',
  LengthMin = 'Comment must be at least 50 characters long',
  LengthMax = 'Comment must be less than 400 characters long'
}

const AddReviewForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction({
      id: id as string,
      body: {
        rating: Number(rating),
        comment: text
      }
    }));
  };
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = React.useState({
    comment: Error.None
  });

  const validateComment = (evt: SyntheticEvent<HTMLTextAreaElement>) => {
    switch (true) {
      case evt.currentTarget.value.length < 50 && evt.currentTarget.value.length !== 0:
        setError({
          comment: Error.LengthMin
        });
        break;
      case evt.currentTarget.value.length > 400:
        setError({
          comment: Error.LengthMax
        });
        break;
      case evt.currentTarget.value.length === 0:
        setError({
          comment: Error.Required
        });
        break;
      default:
        setError({
          comment: Error.None
        });
    }
  };

  const changeRatingHandler = useCallback((evt: SyntheticEvent<HTMLInputElement>) => {
    setRating(evt.currentTarget.value);
  }, []);

  const changeTextHandler = useCallback((evt: SyntheticEvent<HTMLTextAreaElement>) => {
    setText(evt.currentTarget.value);
    validateComment(evt);
  }, []);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <ReviewRating onChange={changeRatingHandler}/>
        { (!error.comment && rating)
          ? <ReviewText onChange={changeTextHandler} value={text} />
          : <ReviewText onChange={changeTextHandler} value={text} disabledButton/>}
        { error.comment !== Error.None && <TextError>{error.comment}</TextError> }
      </form>
    </div>
  );
};

export default memo(AddReviewForm);
