import React from "react";

function Pagination({ isActive, handlePagination, index }) {
  return (
    <div>
      <button
        className={`border border-gray-400 mx-[2px] c py-3 px-4 xl:px-6 xl:py-4 ${
          isActive === index + 1 ? "bg-black text-white" : "bg-white"
        }`}
        onClick={() => {
          handlePagination(index + 1);
        }}
      >
        {index + 1}
      </button>
    </div>
  );
}

export default Pagination;
