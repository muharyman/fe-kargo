import React, { useState, useCallback, useContext } from "react";
import { useLocation } from "wouter";

import RadioForm from "../components/RadioForm";
import AppContext from "../context/AppContext";

export default function Login() {
  const { setAuth, setUser } = useContext(AppContext);
  const [account, setAccount] = useState("");
  const [location, setLocation] = useLocation();

  const handleLogin = useCallback(
    (user) => {
      if (user.length !== 0) {
        if (user == "Transporter") {
          setLocation("/transporter/trucks");
        } else {
          setLocation("/shipper/shippment");
        }
        setAuth(true);
        setUser(user);
        localStorage.setItem("kargo-token", user);
      }
    },
    [setAuth]
  );
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="shadow-md rounded-xl bg-white p-8 min-w-[20rem] min-h-[20rem] flex flex-col items-center">
        <p className="font-semibold text-blue-800 text-2xl text-center">
          Selamat Datang di Kargo Tech
        </p>

        <div className="mt-12 w-full">
          <RadioForm
            label="Role"
            values={["Transporter", "Shipper"]}
            setUser={setAccount}
          />
        </div>

        <div className="mt-12">
          <button
            onClick={() => handleLogin(account)}
            className="bg-blue-800 min-w-[10rem] focus:outline-none hover:bg-opacity-80 px-5 py-3 rounded-lg text-center text-white text-lg font-semibold"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
