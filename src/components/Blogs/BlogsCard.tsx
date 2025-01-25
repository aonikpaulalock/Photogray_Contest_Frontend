/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaRegCalendarAlt, FaHeart, FaRegComment } from 'react-icons/fa';
import blogUser from "../../assets/landingPage/Blogs/blogUser.png"
import { Blog } from '../../types';
import { useState } from 'react';
import { blogDateFormate } from '../../utils/blogDateFormate';
import { useTotalLikesQuery } from '../../redux/feature/user/blogLike';
import { useTotalCommentsQuery } from '../../redux/feature/user/blogComment';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../../redux/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import Swal from 'sweetalert2';
const BlogsCard = ({ blog }: {
  blog: Blog
}) => {
  const navigate = useNavigate();
  const { data: totalLikes } = useTotalLikesQuery(blog?._id);
  const { data: totalComments } = useTotalCommentsQuery(blog?._id);

  const [showFullContent] = useState(false);

  const user = useAppSelector(currentUser);
  const handleReadMoreClick = () => {
    if (user) {
      navigate(`/dashboard/${blog?.userId?.role}/blogDetails/${blog?._id}`);
    } else {
      Swal.fire({
        title: "Please Login First!",
        text: "You need to log in to read the blog details.",
        icon: "warning",
        confirmButtonText: "Okay",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-[#F9F9F9] overflow-hidden p-5">
      <img src={blog?.blogPhoto} alt={blog?.userId?.username} className="w-full h-56 object-cover" />
      <div className="">
        <div className="flex items-center justify-between my-6">
          <div className="flex items-center space-x-2">
            <FaRegCalendarAlt className="text-blue-gray-300" />
            <span className="text-blue-gray-600 text-sm font-medium">{blogDateFormate(blog.createdAt)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="text-red" />
            <span className="text-blue-gray-600 text-sm font-medium">{totalLikes?.data || 0}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegComment className="text-blue-gray-600" />
            <span className="text-blue-gray-600 text-sm font-medium">{totalComments?.data || 0}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <img
            src={blog?.userId?.profileImage || blogUser}
            alt={blog?.userId?.username}
            className="w-14 h-14 object-cover rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-base font-semibold text-primary">{blog?.userId?.username}</h3>
            <p className="text-sm font-thin text-[#7C88A8]">{blog?.userId?.country}</p>
          </div>
        </div>

        <div className='py-3'>
          <p className="text-base leading-[28px] font-semibold mb-4 text-primary">
            {showFullContent
              ? blog?.content
              : blog?.content?.slice(0, 70) + (blog?.content?.length > 70 ? "..." : "")}
          </p>
        </div>
        <hr className='border border-[#f1efef] mb-5' />
        <div className='text-center mb-4'>
          <button
            onClick={handleReadMoreClick}
            className="text-primary font-bold hover:text-secondary hover:underline transition duration-300 ease-in-out">
            Read more
          </button>
        </div>
      </div>
    </div>
  )
};

export default BlogsCard;