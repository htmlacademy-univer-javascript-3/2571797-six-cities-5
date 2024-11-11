import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../enums/authorization-status/authorization-status.tsx';
import {AppRoute} from '../../enums/app-route/app-route.tsx';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login}/>
  );
}
