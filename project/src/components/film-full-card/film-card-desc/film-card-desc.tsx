import React from 'react';
import FilmCardNav from './elements/film-card-nav/film-card-nav';
import FilmReviews from './elements/film-reviews/film-reviews';
import FilmOverview from './elements/film-overview/film-overview';
import FilmDetails from './elements/film-details/film-details';

export type ActiveDescription = 'Overview' | 'Details' | 'Reviews';

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
