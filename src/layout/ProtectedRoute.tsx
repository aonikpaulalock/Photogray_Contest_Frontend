import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, token } from "../redux/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { TUser } from "../types";

type TProtectRoute = {
  children: ReactNode;
  role?: string;
};

const ProtectedRoute = ({ children, role }: TProtectRoute) => {
  const userToken = useAppSelector(token);
  console.log(userToken)
  const dispatch = useAppDispatch();
  const location = useLocation();
  let user;

  if (userToken) {
    user = verifyToken(userToken) as TUser;
  }

  if (!userToken) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  if (role && user?.role !== role) {
    dispatch(logout());
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
