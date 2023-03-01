import React from 'react';
import cls from './GoBackNavigate.module.css';
import {useNavigate} from 'react-router-dom';

const GoBackNavigate = () => {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <p className={cls.supportText}>
        Oops you&apos;re lost! Click on the button to return to the previous page
      </p>
      <div className="catalog__more">
        <button className={`catalog__button ${cls.btnBack}`} type="button" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default GoBackNavigate;
