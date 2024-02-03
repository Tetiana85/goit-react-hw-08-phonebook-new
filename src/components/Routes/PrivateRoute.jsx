import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshed } from '../../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshed);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : Component}</>;
};
