import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import { adminRoutes } from "./admin.routes";
import { contestHolderRoutes } from "./contestHolder.routes";
import { userRoutes } from "./user.routes";
import Mainlayout from "../components/Dashboard/Mainlayout";

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