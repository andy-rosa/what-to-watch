import {useNavigate} from 'react-router-dom';
import {RoutePath} from '../app-router/config/router-config';
import {getToken} from '../../../api/local-storage/token';
import {useEffect} from 'react';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {getUserAuthStatus} from '../../../store/user/selectors/get-user-auth-status/get-user-auth-status';

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { children } = props;
  const authStatus = useAppSelector(getUserAuthStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate(RoutePath.sign_in);
    }
  }, [authStatus]);

  return children;
}

export default PrivateRoute;
