import React from 'react';
import {Link} from 'react-router-dom';
import {RoutePath} from '../../../Routers/AppRouter/config/routerConfig';

const LogoHeader = () => (
  <div className="logo">
    <Link to={RoutePath.main} className={'logo__link'}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default LogoHeader;
