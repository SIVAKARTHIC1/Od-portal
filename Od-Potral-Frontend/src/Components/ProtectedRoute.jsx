import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/authProvider";

const ProtectedRoute = ({ requiredRole }) => {
  const {state:{user,isLoading}} = useAuthContext();
  console.log(requiredRole);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!(user.role === requiredRole)) return <Navigate to={"/login"} />;

  return <Outlet />;
};

export default ProtectedRoute;
