import React, { useState, useCallback, useEffect } from "react";
import paginate from "jw-paginate";
import PageItem from "./PageItem";

export default function Pagination({
  total,
  currentPage,
  pageSize,
  maxPages,
  getCurrent,
}) {
  const [hasil, setHasil] = useState({});
  const handleClick = useCallback(
    (number) => {
      getCurrent(number);
    },
    [getCurrent]
  );
  useEffect(() => {
    let page = paginate(total, currentPage, pageSize, maxPages);
    setHasil(page);
  }, [total, currentPage, pageSize, maxPages]);

  const pages = useCallback(() => {
    if (hasil.pages) {
      let viewPage = hasil.pages;
      return (
        <div className="flex justify-between items-center space-x-2">
          {viewPage.map((item) => (
            <PageItem
              key={item}
              number={item}
              getClick={handleClick}
              active={currentPage}
            />
          ))}
        </div>
      );
    }
  }, [hasil, handleClick, currentPage]);

  return (
    <div className="flex justify-center space-x-2">
      <button
        className={`focus:outline-none  ${
          currentPage === 1 ? "opacity-25" : "hover:bg-gray-2 rounded-full"
        }`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <p className="py-2 px-4 rounded-full text-sm font-sans bg-gray-200 cursor-pointer flex items-center">
          Prev
        </p>
      </button>
      {pages()}
      <button
        className={`focus:outline-none  ${
          currentPage === hasil.totalPages
            ? "opacity-25"
            : "hover:bg-gray-200 rounded-full"
        }`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === hasil.totalPages}
      >
        <p
          className={`py-2 px-4 rounded-full text-sm font-sans bg-gray-200 cursor-pointer flex items-center`}
        >
          Next
        </p>
      </button>
    </div>
  );
}
