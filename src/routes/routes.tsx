import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import { adminRoutes } from "./admin.routes";
import { contestHolderRoutes } from "./contestHolder.routes";
import { userRoutes } from "./user.routes";
import Mainlayout from "../components/Dashboard/Mainlayout";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import ResetPassord from "../pages/ResetPassword/ResetPassord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout
      showHeaderFooter={true}
    >
      <Home />
    </Layout>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassord />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Mainlayout />,
    children: [
      adminRoutes,
      contestHolderRoutes,
      userRoutes,
    ],
  },
]);