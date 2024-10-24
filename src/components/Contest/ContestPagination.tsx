import { FaChevronRight } from "react-icons/fa";

const ContestPagination = () => {
  return (
    <div className="flex justify-end items-center mt-16">
      <button className="border border-secondary bg-secondary text-white px-4 py-2 me-4">
        1
      </button>
      <button className="border border-gray-400 text-gray-400 px-4 py-2  hover:bg-gray-200 transition-colors duration-300 me-4">
        2
      </button>
      <button className="border border-gray-400 text-gray-400 px-4 py-2  hover:bg-gray-200 transition-colors duration-300 me-4">
        3
      </button>
      <button className="border border-gray-400 text-gray-400 px-4 py-2  hover:bg-gray-200 transition-colors duration-300 me-4">
        4
      </button>
      <button className="border border-gray-400 text-gray-400 px-4 py-2  hover:bg-gray-200 transition-colors duration-300 me-4">
        5
      </button>
      <button className="border border-gray-400 text-gray-400 px-4 py-3  hover:bg-gray-200 transition-colors duration-300 me-4">
        <FaChevronRight className="ml-1" />
      </button>
    </div>
  )
};

export default ContestPagination;