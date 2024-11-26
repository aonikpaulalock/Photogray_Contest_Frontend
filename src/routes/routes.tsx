import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ContestHolderDashboard from "../pages/Dashboard/contestHolder/ContestHolderDashboard";
import UserDashboard from "../pages/Dashboard/user/UserDashboard";
import Mainlayout from "../components/Dashboard/Mainlayout";
import CreateContest from "../pages/Dashboard/admin/CreateContest";
import AllContest from "../pages/Dashboard/user/AllContest";
import ManageContest from "../pages/Dashboard/admin/ManageContest";
import ManageUser from "../pages/Dashboard/admin/ManageUser";
import ContestHolderCreateContest from "../pages/Dashboard/contestHolder/ContestHolderCreateContest";
import ContestHolderContest from "../pages/Dashboard/contestHolder/ContestHolderContest";
import AllParticipation from "../pages/Dashboard/contestHolder/AllParticipation";
import AllSubmission from "../pages/Dashboard/contestHolder/AllSubmission";
import CreateBlog from "../pages/Dashboard/user/CreateBlog";
import AllBlog from "../pages/Dashboard/user/AllBlog";
import AdminProfile from "../pages/Dashboard/admin/AdminProfile";
import AdminChangePassword from "../pages/Dashboard/admin/ADminChangePassword";
import ContestHolderProfile from "../pages/Dashboard/contestHolder/ContestHolderProfile";
import ContestHolderChangePassword from "../pages/Dashboard/contestHolder/ContestHolderChangePassword";
import UserProfile from "../pages/Dashboard/user/UserProfile";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import AdminDashboard from "../pages/Dashboard/admin/adminDashboard";

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

  // Dashboard Routes
  {
    path: "/dashboard",
    element: <Mainlayout />,
    children: [
      {
        path: "admin",
        element: <AdminDashboard />,
        children: [
          {
            path: "create-contest",
            element: <CreateContest />,
          },
          {
            path: "all-contest",
            element: <AllContest />,
          },
          {
            path: "manage-contest",
            element: <ManageContest />,
          },
          {
            path: "manage-user",
            element: <ManageUser />,
          },
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "change-password",
            element: <AdminChangePassword />,
          },
        ]
      },
      {
        path: "contestHolder",
        element: <ContestHolderDashboard />,
        children: [
          {
            path: "create-contest-contestHolder",
            element: <ContestHolderCreateContest />,
          },
          {
            path: "all-contest-contestHolder",
            element: <ContestHolderContest />,
          },
          {
            path: "all-participation",
            element: <AllParticipation />,
          },
          {
            path: "all-submission",
            element: <AllSubmission />,
          },
          {
            path: "profile",
            element: <ContestHolderProfile />,
          },
          {
            path: "change-password",
            element: <ContestHolderChangePassword />,
          },
        ]
      },
      {
        path: "user",
        element: <UserDashboard />,
        children: [
          {
            path: "all-contests",
            element: <AllContest />,
          },
          {
            path: "create-blog",
            element: <CreateBlog />,
          },
          {
            path: "all-blog",
            element: <AllBlog />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "change-password",
            element: <UserChangePassword />,
          },
        ]
      },
    ],
  },

]);