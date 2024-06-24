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
    <div className="pagination flex justify-center">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-3 py-1.5 text-gray-900 text-sm font-semibold bg-gray-100/50 rounded-lg mr-1">
        Previous
      </button>
      <span className="text-md text-gray-900 m-1 font-semibold"> {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}  className="px-3 py-1.5 text-gray-900 text-sm font-semibold bg-gray-100/50 rounded-lg mr-1">
        Next
      </button>
    </div>
  );
};

export default Pagination;
