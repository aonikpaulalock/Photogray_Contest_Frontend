import { useState } from "react";
import moment from "moment";
import { FaEdit, FaTrash, FaEye, FaRegClock, FaRegHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import { useDeleteBlogMutation, useGetUserBlogQuery } from "../../../redux/feature/user/blogApi";
import { Blog } from "../../../types";
import { useNavigate } from "react-router-dom";
import deleteEntity from "../../../utils/deleteEntity";
import Modal from "../../../components/Modal/Modal";
import BlogUpdate from "./BlogUpdate";
import { BiBook, BiEnvelope } from "react-icons/bi";
import { RiNumbersFill } from "react-icons/ri";

const AllBlog = () => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const { data: blogs } = useGetUserBlogQuery((user?.userId) as string);
  const [deleteBlog] = useDeleteBlogMutation();

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const deleteUserBlog = async (blogId: string) => {
    await deleteEntity(
      blogId,
      deleteBlog,
      "Your blog has been deleted.",
      "Something went wrong!"
    );
  };

  // Function to open modal and set selected blog
  const openUpdateModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    setOpenDropdown(null);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="p-6">
      <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
          <tr>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Create Date</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Blog Name</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Email</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Image</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Like</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.data?.map((blog: Blog, index: number) => (
            <tr key={blog._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
              {/* Serial */}
              <td className="p-4 text-blue-gray-700 font-bold">
                <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
              </td>

              {/* Date */}
              <td className="p-4 text-blue-gray-400 font-medium">
                <FaRegClock className="inline mr-2 text-lg text-secondary" />
                {blog?.createdAt && moment(blog?.createdAt).format("MMMM D, YYYY, h:mm A")}
              </td>

              {/* Blog Name */}
              <td className="p-4 text-blue-gray-500 font-poppins font-medium ">
                <BiBook className="inline mr-2 text-lg text-secondary" /> {blog.title}
              </td>

              {/* Email */}
              <td className="p-4">
                <div>
                  <BiEnvelope className="inline mr-2 text-lg text-secondary " />
                  <span className="text-blue-gray-500 font-poppins font-semibold">{blog?.userId?.email}</span>
                </div>
              </td>

              {/* Image */}
              <td className="p-4 text-gray-500">
                {/* <FaImage className="inline mr-2 text-gray-500" />  */}
                <img className="w-12 h-12 object-cover rounded-full" src={blog.blogPhoto} alt="" />
              </td>

              {/* Like */}
              <td className="p-4 text-blue-gray-500 font-poppins font-semibold">
                <FaRegHeart className="inline mr-2 text-lg text-red " /> 10k
              </td>

              {/* Actions */}
              <td className="p-4 relative text-center">
                <div className="relative">
                  <button onClick={() => toggleDropdown(index)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <BsThreeDots className="text-xl" />
                  </button>
                  {openDropdown === index && (
                    <div className={`absolute ${index === blogs?.data?.length - 1 ? "-bottom-2" : "top-4"} right-20 bg-white shadow-md rounded-lg z-50 text-sm w-32`}>
                      <ul>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => openUpdateModal(blog)}>
                          <FaEdit className="mr-2 text-blue-500" /> Update
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => deleteUserBlog(blog._id)}>
                          <FaTrash className="mr-2 text-red" /> Delete
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => navigate(`/dashboard/${user?.role}/blogDetails/${blog._id}`)}>
                          <FaEye className="mr-2 text-green" /> Details
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

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        title="Update Blog"
        onClose={closeModal}
      >
        <BlogUpdate blog={selectedBlog} closeModal={closeModal} />
      </Modal>

      <div className="mt-4 flex justify-center space-x-2">
        <button className="px-3 py-1 rounded-md bg-blue-100 text-blue-600">1</button>
        <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600">2</button>
        <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600">3</button>
      </div>
    </div>
  );
};

export default AllBlog;
