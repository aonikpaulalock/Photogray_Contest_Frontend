// sidebarItems.ts
import { FaTrophy, FaUsers, FaRegEdit, FaTasks, FaUserCog, FaPen, FaBlog } from "react-icons/fa";

type SidebarItem = {
  path: string;
  label: string;
  icon: JSX.Element;
};

export const sidebarItems: Record<"admin" | "contestHolder" | "user", SidebarItem[]> = {
  admin: [
    {
      path: "/dashboard/admin/create-contest",
      label: "Create Contest",
      icon: <FaTrophy />
    },
    {
      path: "/dashboard/admin/all-contest",
      label: "All Contest",
      icon: <FaTasks />
    },
    {
      path: "/dashboard/admin/manage-contest",
      label: "Manage Contest",
      icon: <FaTasks />
    },
    {
      path: "/dashboard/admin/manage-user",
      label: "Manage User",
      icon: <FaUserCog />
    },
  ],
  contestHolder: [
    {
      path: "/dashboard/contestHolder/create-contest-contestHolder",
      label: "Create Contest",
      icon: <FaTrophy />
    },
    {
      path: "/dashboard/contestHolder/all-contest-contestHolder",
      label: "All Contest",
      icon: <FaTasks />
    },
    {
      path: "/dashboard/contestHolder/all-participation", label: "All Participation",
      icon: <FaUsers />
    },
    {
      path: "/dashboard/contestHolder/all-submission", label: "All Submission",
      icon: <FaRegEdit />
    },
  ],
  user: [
    {
      path: "/dashboard/user/all-contests",
      label: "All Contests",
      icon: <FaTrophy />
    },
    {
      path: "/dashboard/user/create-blog",
      label: "Create Blog",
      icon: <FaPen />
    },
    {
      path: "/dashboard/user/all-blog",
      label: "All Blogs",
      icon: <FaBlog />
    },
  ],
};