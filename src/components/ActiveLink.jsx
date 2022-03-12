/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "wouter";

export default function ActiveLink({ value, href, img, isSideOpen }) {
  const [location, setLocation] = useLocation();
  return (
    <Link href={href}>
      <div
        className={`${
          location.includes(href)
            ? "bg-blue-400 bg-opacity-25"
            : "bg-white hover:bg-gray-100 text-black text-opacity-80"
        } ${
          isSideOpen ? "space-x-2" : "justify-center"
        } max-w-full hover:no-underline h-16 px-6 rounded-lg flex items-center cursor-pointer py-2 relative`}
      >
        <div className="flex justify-center items-center p-4">
          <img src={img} className="h-5 w-5" alt={value} />
        </div>
        <p
          className={`${
            isSideOpen
              ? "visible max-w-full opacity-100 "
              : "invisible max-w-0 opacity-0"
          } delay-300 transition-opacity duration-200 text-sm font-medium`}
        >
          {value}
        </p>
      </div>
    </Link>
  );
}
