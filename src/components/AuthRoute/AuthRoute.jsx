import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AuthRoute = () => {
  const { authState } = useAuth();

  return (authState.isAuthenticated ? <Outlet /> : <Navigate to='/login' />);
};

export default AuthRoute;
