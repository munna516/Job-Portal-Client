import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading/Loading";
import AuthContext from "../Context/Auth Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;