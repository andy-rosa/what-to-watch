import React from 'react';
import FilmCardNav from './elements/FilmCardNav/FilmCardNav';
import FilmReviews from '../FilmReviews/FilmReviews';
import FilmOverview from '../FilmOverview/FilmOverview';
import FilmDetails from '../FilmDetails/FilmDetails';

export type ActiveDescription ='Overview' | 'Details' | 'Reviews';

const FilmCardDesc = () => {
  const [activeTab, setActiveTab] = React.useState<ActiveDescription>('Overview');

  const getActiveInfo = () => {
    switch (activeTab) {
      case 'Overview':
        return <FilmOverview />;
      case 'Details':
        return <FilmDetails />;
      case 'Reviews':
        return <FilmReviews/>;
    }
  };

  return (
    <div className="film-card__desc">
      <FilmCardNav changeActiveTab={setActiveTab} activeTab={activeTab}/>
      {getActiveInfo()}
    </div>
  );
};

export default FilmCardDesc;
