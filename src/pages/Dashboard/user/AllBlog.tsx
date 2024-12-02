import { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import { useGetUserBlogQuery } from "../../../redux/feature/user/blogApi";
const AllBlog = () => {
  const user = useAppSelector(currentUser)
  console.log(user)
  const { data: blogs, isLoading } = useGetUserBlogQuery((user?.userId) as string)

  console.log(blogs)

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="p-6">
      <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px]   border-b-blue-gray-100">
          <tr>
            <th className="p-4">Serial</th>
            <th className="p-4">Title</th>
            <th className="p-4">Email</th>
            <th className="p-4">Image</th>
            <th className="p-4">Like</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.data?.map((blog, index) => (
            <tr
              key={blog._id}
              className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px]   border-b-blue-gray-100"
            >
              <td className="p-4 text-gray-700">{index + 1}</td>
              <td className="p-4 text-gray-500">{blog.title}</td>
              <td className="p-4">
                <div>
                  <span className="block text-gray-700 font-medium">
                    {blog?.userId?.email}
                  </span>
                </div>
              </td>
              <td className="p-4 text-gray-500">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={blog.blogPhoto}
                  alt=""
                />
              </td>
              <td className="p-4 text-orange-600 font-semibold">
                {blog.amount}
              </td>
              <td className="p-4 relative text-center">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <BsThreeDots className="text-xl" />
                  </button>
                  {openDropdown === index && (
                    <div
                      className={`absolute ${index === blogs?.data?.length - 1 ? "-bottom-2" : "top-4"
                        } right-20 bg-white shadow-md rounded-lg z-50 text-sm w-32`}
                    >
                      <ul>
                        <li
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => alert("Update Action")}
                        >
                          <FaEdit className="mr-2 text-blue-500" /> Update
                        </li>
                        <li
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => alert("Delete Action")}
                        >
                          <FaTrash className="mr-2 text-red-500" /> Delete
                        </li>
                        <li
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => alert("View Details Action")}
                        >
                          <FaEye className="mr-2 text-green-500" /> Details
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center space-x-2">
        <button className="px-3 py-1 rounded-md bg-blue-100 text-blue-600">
          1
        </button>
        <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600">
          2
        </button>
        <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600">
          3
        </button>
      </div>
    </div>
  );
};

export default AllBlog;
