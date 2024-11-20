import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, token, TUser } from "../redux/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";


type TProtectRoute = {
  children: ReactNode,
  role: string | undefined
}

const ProtectedRoute = ({ children, role }: TProtectRoute) => {
  const navigate = useNavigate()
  const userToken = useAppSelector(token);
  const dispatch = useAppDispatch()

  let user;

  if (userToken) {
    user = verifyToken(userToken) as TUser
  }

  if (role !== undefined && role !== (user)?.role) {
    dispatch(logout())
    return navigate("/login");
  }

  if (!userToken) {
    return navigate("/login")
  }
  return children
};

export default ProtectedRoute;