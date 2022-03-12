import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, useLocation } from "wouter";

import { AppProvider } from "./context/AppContext.js";

import Login from "./pages/login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import ProtectRouteTransporter from "./components/withPrivateRouteTransporter";
import ProtectRouteShipper from "./components/withPrivateRouteShipper";

import Trucks from "./pages/truck/index";
import FormTrucks from "./pages/truck/form";
import Drivers from "./pages/driver/index";
import Shipments from "./pages/shipment/index";

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
            location.includes("/login")
              ? "w-screen"
              : isSideOpen
              ? "w-5/6"
              : "w-[90%]"
          } transition-all ${
            location.includes("/login") ? "duration-0" : "duration-300"
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
            <ProtectRouteTransporter
              Component={FormTrucks}
              path={"/transporter/trucks/form"}
            />
            <ProtectRouteTransporter
              Component={Drivers}
              path={"/transporter/drivers"}
            />
            <ProtectRouteShipper
              Component={Shipments}
              path={"/shipper/shipments"}
            />
          </Switch>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
