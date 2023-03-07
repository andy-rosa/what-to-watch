import {Navigate} from 'react-router-dom';
import {RoutePath} from '../AppRouter/config/routerConfig';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

interface PrivateRouteProps {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={RoutePath.sign_in} replace/>
  );
}

export default PrivateRoute;
