import { Outlet } from "react-router-dom";
import routes from "../../consts/routes";
import useAuth from "../../hooks/useAuth";

const AdminRoute = () => {
  const { authState } = useAuth();

  return (authState.user.roles.includes('ROLE_ADMIN') ? <Outlet /> : <Navigate to={routes.home} />);
}

export default AdminRoute