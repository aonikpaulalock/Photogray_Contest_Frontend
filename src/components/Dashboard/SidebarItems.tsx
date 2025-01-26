// sidebarItems.ts
import { FaTrophy, FaRegEdit, FaTasks, FaUserCog, FaPen,FaUserAlt, FaLock, FaClipboard, FaNewspaper, FaBook } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiPodiumWinner } from "react-icons/gi";

type SidebarItem = {
  path: string;
  label: string;
  icon: JSX.Element;
};

export const sidebarItems: Record<"admin" | "contestHolder" | "user", SidebarItem[]> = {
  admin: [
    {
      path: "/dashboard/admin/profile",
      label: "My Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/dashboard/admin/change-password",
      label: "Change Password",
      icon: <FaLock />,
    },
    {
      path: "/dashboard/admin/create-contest",
      label: "Create Contest",
      icon: <FaTrophy />
    },
    {
      path: "/dashboard/admin/all-contest",
      label: "My Contest",
      icon: <GiPodiumWinner />
    },
    {
      path: "/dashboard/admin/manage-contest",
      label: "Manage Contest",
      icon: <FiSettings/>
    },
    {
      path: "/dashboard/admin/submission",
      label: "All Submission",
      icon: <FaRegEdit />
    },
    {
      path: "/dashboard/admin/manage-user",
      label: "Manage User",
      icon: <FaUserCog />
    },
    {
      path: "/dashboard/admin/all-blog",
      label: "All Blogs",
      icon: <FaNewspaper />
    },
  ],
  contestHolder: [
    {
      path: "/dashboard/contestHolder/profile",
      label: "My Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/dashboard/contestHolder/change-password",
      label: "Change Password",
      icon: <FaLock />,
    },
    {
      path: "/dashboard/contestHolder/create-contest",
      label: "Create Contest",
      icon: <FaTrophy />
    },
    {
      path: "/dashboard/contestHolder/all-contest-contestHolder",
      label: "My Contest",
      icon: <FaTasks />
    },
    {
      path: "/dashboard/contestHolder/submission",
      label: "All Submission",
      icon: <FaRegEdit />
    },
    {
      path: "/dashboard/contestHolder/all-blog",
      label: "All Blogs",
      icon: <FaNewspaper />
    },
  ],
  user: [
    {
      path: "/dashboard/user/profile",
      label: "My Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/dashboard/user/change-password",
      label: "Change Password",
      icon: <FaLock />,
    },
    {
      path: "/dashboard/user/all-contests",
      label: "All Contests",
      icon: <FaTrophy />
    },
    {
      path: "/dashboard/user/submission",
      label: "My Submission",
      icon: <FaClipboard />
    },
    {
      path: "/dashboard/user/create-blog",
      label: "Create Blog",
      icon: <FaPen />
    },
    {
      path: "/dashboard/user/my-blog",
      label: "My Blogs",
      icon: <FaBook />
    },
    {
      path: "/dashboard/user/all-blog",
      label: "All Blogs",
      icon: <FaNewspaper />
    },
  ],
};
