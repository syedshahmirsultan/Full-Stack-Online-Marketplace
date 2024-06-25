import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination flex justify-center mt-10">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-5 py-2.5 text-gray-900 text-md font-semibold bg-gray-100/50 rounded-lg mr-1">
        Previous
      </button>
      <span className="text-md flex items-center text-gray-900 mt-1 pr-1 pl-1 font-semibold"> {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}  className="px-5 py-2.5 text-gray-900 text-md font-semibold bg-gray-100/50 rounded-lg mr-1">
        Next
      </button>
    </div>
  );
};

export default Pagination;
