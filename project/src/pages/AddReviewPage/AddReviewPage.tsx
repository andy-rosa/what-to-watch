import React from 'react';
import Header from "../../components/Headers/Header";
import AddReviewForm from "../../components/Forms/AddReviewForm/AddReviewForm";

const AddReviewPage = () => {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header isShowBreadcrumb={true} />
        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
               height="327"/>
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
};

export default AddReviewPage;
