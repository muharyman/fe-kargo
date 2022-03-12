import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, useLocation } from "wouter";

import { AppProvider } from "./context/AppContext.js";

import Login from "./pages/login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import ProtectRouteTransporter from "./components/withPrivateRouteTransporter";

import Trucks from "./pages/truck/index";

function App() {
  const [location, setLocation] = useLocation();

  const [auth, setAuth] = useState(true);

  const [isSideOpen, setIsSideOpen] = useState(false);

  const [user, setUser] = useState("");

  React.useEffect(() => {
    let token = localStorage.getItem("kargo-token");
    if (!token) {
      setAuth(false);
    }
  }, []);

  return (
    <div className="w-screen flex items-stretch">
      <AppProvider
        value={{
          auth,
          setAuth,
          setIsSideOpen,
          isSideOpen,
          user,
          setUser,
        }}
      >
        {!location.includes("/login") ? <Sidebar /> : null}
        <div
          className={`${
            location === "/login"
              ? "w-screen"
              : isSideOpen
              ? "w-5/6"
              : "w-[90%]"
          } transition-all ${
            location === "/login" ? "duration-0" : "duration-300"
          } ease-in h-screen overflow-auto bg-gray-100`}
        >
          {!location.includes("/login") ? <Navbar /> : null}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectRouteTransporter
              Component={Trucks}
              path={"/transporter/trucks"}
            />
          </Switch>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
