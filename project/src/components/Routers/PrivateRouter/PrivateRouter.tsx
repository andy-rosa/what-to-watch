import {Navigate} from 'react-router-dom';
import {RoutePath} from '../AppRouter/config/routerConfig';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getUserAuthStatus} from '../../../store/User/selectors/getUserAuthStatus/getUserAuthStatus';

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
  const authorizationStatus = useAppSelector(getUserAuthStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={RoutePath.sign_in} replace/>
  );
}

export default PrivateRoute;
