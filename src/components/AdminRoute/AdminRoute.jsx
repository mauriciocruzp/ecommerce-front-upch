import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminRoute = () => {
  const { authState } = useAuth();

  return (authState.user.roles.includes('ROLE_ADMIN') ? <Outlet /> : <Navigate to='/' />);
}

export default AdminRoute