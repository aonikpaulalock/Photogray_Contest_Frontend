import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
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
            element: <AllBlog/>,
          },
        ]
      },
    ],
  },

]);