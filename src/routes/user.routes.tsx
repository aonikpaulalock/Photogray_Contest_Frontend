import AllBlog from "../pages/Dashboard/user/AllBlog";
import AllContest from "../pages/Dashboard/user/AllContest";
import CreateBlog from "../pages/Dashboard/user/CreateBlog";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import UserDashboard from "../pages/Dashboard/user/UserDashboard";
import UserProfile from "../pages/Dashboard/user/UserProfile";

export const userRoutes = {
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
      element: <UserProfile role="user" />,
    },
    {
      path: "change-password",
      element: <UserChangePassword role="user" />,
    },
  ],
};