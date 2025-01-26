import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface PaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  current: currentPage,
  pageSize,
  total,
  onChange,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onChange(page);
    }
  };

  return (
    <div className="flex justify-end items-center mt-8">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`border px-4 py-2 me-4 ${
          currentPage === 1
            ? "border-gray-400 text-gray-400 cursor-not-allowed"
            : "border-secondary bg-secondary text-white hover:bg-secondary-dark"
        }`}
      >
        <FaChevronLeft />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`border px-4 py-2 me-4 ${
            currentPage === page
              ? "border-secondary bg-secondary text-white"
              : "border-gray-400 text-gray-400 hover:bg-gray-200 transition-colors duration-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`border px-4 py-2 me-4 ${
          currentPage === totalPages
            ? "border-gray-400 text-gray-400 cursor-not-allowed"
            : "border-secondary bg-secondary text-white hover:bg-secondary-dark"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
