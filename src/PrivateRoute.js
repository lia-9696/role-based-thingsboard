import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Correct path

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/" />;
  }

  // If user is logged in, allow access to the protected route
  return children;
};

export default PrivateRoute;
