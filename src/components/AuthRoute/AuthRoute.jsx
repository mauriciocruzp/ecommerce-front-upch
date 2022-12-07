import { Navigate, Outlet } from 'react-router-dom';
import routes from '../../consts/routes';
import useAuth from '../../hooks/useAuth';

const AuthRoute = () => {
  const { authState } = useAuth();

  return (authState.isAuthenticated ? <Outlet /> : <Navigate to={routes.login} />);
};

export default AuthRoute;
