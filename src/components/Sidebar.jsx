import React, { useContext, useMemo } from "react";

import AppContext from "../context/AppContext";
import ActiveLink from "./ActiveLink";

import logo from "../assets/logo.png";
import drivers from "../assets/driver.svg";
import trucks from "../assets/trucks.svg";
import shipping from "../assets/shipping.svg";

export default function Sidebar() {
  const { auth, isSideOpen, user } = useContext(AppContext);

  const listItem = useMemo(() => {
    if (user == "Shipper") {
      return [
        {
          value: "Shippment",
          href: "/shipper/shipments",
          img: shipping,
        },
      ];
    }
    return [
      {
        value: "Trucks",
        href: "/transporter/trucks",
        img: trucks,
      },
      {
        value: "Drivers",
        href: "/transporter/drivers",
        img: drivers,
      },
    ];
  }, [user]);

  return (
    <div
      className={`${
        isSideOpen ? "w-1/6" : "w-[10%] min-w-max"
      } min-h-screen transition-all p-3 flex flex-col items-center duration-300 ease-in bg-white shadow-md`}
    >
      <img src={logo} className="h-10" alt="logo poin" />

      <p
        className={`
            px-3 mt-4 h-8 transition-opacity delay-300 duration-200 text-black opacity-80 font-semibold text-base`}
      >
        Main Menu
      </p>

      <div className="flex flex-col space-y-2 mt-6">
        {listItem.map((item) => (
          <ActiveLink
            key={item.value}
            href={item.href}
            value={item.value}
            img={item.img}
            isSideOpen={isSideOpen}
          />
        ))}
      </div>
    </div>
  );
}
