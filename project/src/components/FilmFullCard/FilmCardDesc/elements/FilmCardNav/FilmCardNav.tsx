import React, {SyntheticEvent} from 'react';
import { ActiveDescription } from '../../FilmCardDesc';

interface FilmCardNavProps {
  changeActiveTab: (tab: ActiveDescription) => void;
  activeTab: ActiveDescription;
}

const FilmCardNav = ({changeActiveTab, activeTab}: FilmCardNavProps) => {
  const handleTabClick = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    changeActiveTab((evt.target as HTMLElement).textContent as ActiveDescription);
  };

  return (
    <nav className="film-nav film-card__nav" data-testid={'film-card-nav'}>
      <ul className="film-nav__list">
        <li className={`film-nav__item ${ activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
          <a href="project/src/components/FilmFullCard/FilmCardDesc/elements#"
            className="film-nav__link"
            onClick={handleTabClick}
          >
            Overview
          </a>
        </li>
        <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
          <a href="project/src/components/FilmFullCard/FilmCardDesc/elements#"
            className="film-nav__link"
            onClick={handleTabClick}
          >
            Details
          </a>
        </li>
        <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
          <a href="project/src/components/FilmFullCard/FilmCardDesc/elements#"
            className="film-nav__link"
            data-testid={'review-link'}
            onClick={handleTabClick}
          >
            Reviews
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FilmCardNav;
