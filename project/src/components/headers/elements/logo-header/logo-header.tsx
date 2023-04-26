import React from 'react';
import {Link} from 'react-router-dom';
import {RoutePath} from '../../../routers/app-router/config/router-config';

const LogoHeader = () => (
  <div className="logo" data-testid='logo-header'>
    <Link to={RoutePath.main} className={'logo__link'}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default LogoHeader;
