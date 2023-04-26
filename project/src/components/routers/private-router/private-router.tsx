import {Navigate} from 'react-router-dom';
import {RoutePath} from '../app-router/config/router-config';
import {getToken} from '../../../api/local-storage/token';

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { children} = props;

  return (
    getToken()
      ? children
      : <Navigate to={RoutePath.sign_in} replace/>
  );
}

export default PrivateRoute;
