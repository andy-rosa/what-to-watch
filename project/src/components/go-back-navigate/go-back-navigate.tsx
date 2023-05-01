import cls from './go-back-navigate.module.css';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from '../routers/app-router/config/router-config';

const GoBackNavigate = () => {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <p className={cls.supportText}>
        Oops you&apos;re lost! Click on the button to return to the previous page
      </p>
      <div className="catalog__more">
        <button
          className={`catalog__button ${cls.btnBack}`}
          type="button"
          onClick={() => navigate(RoutePath.main)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default GoBackNavigate;
