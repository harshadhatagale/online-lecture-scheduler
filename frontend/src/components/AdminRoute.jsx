import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {

  const { user, token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/my-lectures" />;
  }

  return children;
};

export default AdminRoute;