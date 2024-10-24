import { FaRegCalendarAlt, FaHeart, FaRegComment } from 'react-icons/fa';
import blogUser from "../../assets/landingPage/Blogs/blogUser.png"
import { TBlog } from '../../types';
const BlogsCard = ({ blog }: {
  blog: TBlog
}) => {
  return (
    <div className="bg-[#F9F9F9] overflow-hidden p-5">
      <img src={blog.image} alt={blog.authorName} className="w-full h-56 object-cover" />
      <div className="">
        <div className="flex items-center justify-between my-6">
          <div className="flex items-center space-x-1">
            <FaRegCalendarAlt className="text-gray-400" />
            <span className="text-gray-400 text-sm">{blog.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaHeart className="text-gray-400" />
            <span className="text-gray-400 text-sm">{blog.views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegComment className="text-gray-400" />
            <span className="text-gray-400 text-sm">{blog.comments}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <img
            src={blogUser}
            alt={blog.authorName}
            className="w-[52px] h-[52px]"
          />
          <div className="ml-4">
            <h3 className="text-base font-semibold text-primary">{blog.authorName}</h3>
            <p className="text-sm font-thin text-[#7C88A8]">{blog.authorRole}</p>
          </div>
        </div>

        <p className="text-base leading-[28px] font-semibold mb-6 text-primary">{blog.description}</p>
        <hr className='border border-[#f1efef] mb-5' />
        <div className='text-center mb-4'>
          <a href="#" className="text-primary font-bold hover:text-secondary hover:underline transition duration-300 ease-in-out">
            Read more
          </a>
        </div>
      </div>
    </div>
  )
};

export default BlogsCard;