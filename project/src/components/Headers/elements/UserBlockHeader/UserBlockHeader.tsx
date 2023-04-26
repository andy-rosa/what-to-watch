import React, {SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { RoutePath } from '../../../Routers/AppRouter/config/routerConfig';
import {useAppSelector} from '../../../../hooks/useAppSelector';
import {getUserAvatar} from '../../../../store/User/selectors/getUserAvatar/getUserAvatar';
import { logoutAction } from '../../../../store/User/actions/logout/logout.api';

const UserBlockHeader = () => {
  const dispatch = useAppDispatch();
  const avatar = useAppSelector(getUserAvatar);

  const onLogoutHandler = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block" data-testid='user-block-header'>
      {avatar &&
        <li className="user-block__item">
          <Link to={RoutePath.my_list}>
            <div className="user-block__avatar">
              <img src={avatar} alt="User avatar" width="63" height="63"/>
            </div>
          </Link>
        </li>}
      <li className="user-block__item">
        {
          avatar
            ? <a href={'#'} className={'user-block__link'} onClick={onLogoutHandler}>Sign out</a>
            : <Link to={RoutePath.sign_in} className={'user-block__link'}>Sign in</Link>
        }
      </li>
    </ul>
  );
};

export default UserBlockHeader;
