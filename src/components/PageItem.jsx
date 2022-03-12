import React from "react";
export default function PageItem({ number, getClick, active }) {
  return (
    <div
      className={`cursor-pointer h-6 w-6 rounded-full ${
        active === number ? "bg-blue-400" : "bg-gray-200"
      } flex items-center justify-center space-x-2 `}
      onClick={() => {
        getClick(number);
      }}
    >
      <p
        className={`${
          active === number ? "text-white" : "text-black"
        } text-sm font-sans text-center`}
      >
        {number}
      </p>
    </div>
  );
}
