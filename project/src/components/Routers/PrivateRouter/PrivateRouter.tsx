import {Navigate} from 'react-router-dom';
import {RoutePath} from '../AppRouter/config/routerConfig';
import {getToken} from '../../../api/localStorage/token';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

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
