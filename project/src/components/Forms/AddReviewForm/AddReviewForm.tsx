import React from 'react';
import ReviewText from "./elements/ReviewText";
import ReviewRating from "./elements/ReviewRating";

const AddReviewForm = () => {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <ReviewRating />
        <ReviewText />
      </form>
    </div>
  );
};

export default AddReviewForm;
