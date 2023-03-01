import React from 'react';
import {Link} from 'react-router-dom';
import { RoutePath } from '../../../Routers/AppRouter/config/routerConfig';

const UserBlockHeader = () => (
  <ul className="user-block">
    <li className="user-block__item">
      <Link to={RoutePath.my_list} >
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </Link>
    </li>
    <li className="user-block__item">
      <Link to={RoutePath.sign_in} className={'user-block__link'}>Sign out</Link>
    </li>
  </ul>
);

export default UserBlockHeader;
