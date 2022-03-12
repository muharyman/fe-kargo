import React, { useState, useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import { useLocation } from "wouter";

import driver from "../assets/driver.svg";
import truck from "../assets/trucks.svg";
import menuicon from "../assets/menuicon.svg";

export default function Navbar() {
  const { isSideOpen, setIsSideOpen, setAuth, user, setUser } =
    useContext(AppContext);
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const listLink = useMemo(
    () => [
      {
        value: "Shippment",
        href: "/shipper/shippment",
        img: "#",
      },
      {
        value: "Trucks",
        href: "/transporter/trucks",
        img: truck,
      },
      {
        value: "Drivers",
        href: "/transporter/drivers",
        img: driver,
      },
    ],
    []
  );

  console.log({ user });

  return (
    <div
      className={`${
        isSideOpen ? "w-5/6" : "w-[90%]"
      } transition-all duration-300 ease-in fixed bg-white shadow-md z-30`}
    >
      <div className="w-full flex items-center justify-between h-14 bg-white shadow-md px-3">
        <div className="flex items-center space-x-2">
          <button
            className="p-3 hover:bg-gray-100 rounded-md focus:outline-none"
            onClick={() => {
              setIsSideOpen(!isSideOpen);
            }}
          >
            <img src={menuicon} className="h-4 w-4" alt="menu" />
          </button>

          {listLink.map((item, i) =>
            location.includes(item.href) ? (
              <div key={i} className="flex space-x-4 items-center">
                <img src={item.img} className="h-6 w-6" alt={item.value} />
                <p className="text-main-black text-lg font-sans font-semibold capitalize">
                  {item.value}
                </p>
              </div>
            ) : null
          )}
        </div>
        <div
          className="h-full flex items-center"
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex items-center px-6 py-2 space-x-2 relative cursor-pointer hover:bg-gray-100 rounded-md">
            <p className="font-sans text-sm text-main-black">{user}</p>
            <button
              onClick={() => {
                localStorage.removeItem("kargo-token");
                setAuth(false);
                setUser("");
              }}
              className="py-2 px-3 hover:bg-gray-200 rounded-md focus:outline-none flex justify-center items-center"
            >
              <p className="font-sans text-sm font-medium text-main-red text-left">
                Logout
              </p>
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div
          className="w-screen bg-black bg-opacity-50 fixed bottom-0 left-0"
          style={{ zIndex: -1, height: "calc(100vh - 3.6rem)" }}
        />
      ) : null}
    </div>
  );
}
