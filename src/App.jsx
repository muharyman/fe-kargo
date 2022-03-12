import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, useLocation } from "wouter";

import { AppProvider } from "./context/AppContext.js";

import Snackbar from "./components/Snackbar";

import Login from "./pages/login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import ProtectRouteTransporter from "./components/withPrivateRouteTransporter";
import ProtectRouteShipper from "./components/withPrivateRouteShipper";

import Trucks from "./pages/truck/index";
import FormTrucks from "./pages/truck/form";
import Drivers from "./pages/driver/index";
import FormDrivers from "./pages/driver/form";
import Shipments from "./pages/shipment/index";

import FormShipments from "./pages/shipment/form";
import FormShipmentsAllocate from "./pages/shipment/formAllocate";

function App() {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackCategory, setSnackCategory] = useState("");
  const [location, setLocation] = useLocation();

  const [auth, setAuth] = useState(true);

  const [isSideOpen, setIsSideOpen] = useState(false);

  const [user, setUser] = useState("");

  const setSnack = useCallback((message, category) => {
    setSnackOpen(Boolean(message));
    if (message) {
      setSnackMessage(message);
      setSnackCategory(category);
    }
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("kargo-token");
    if (!token) {
      setAuth(false);
    }
  }, [location]);

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
          setSnack,
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
            <ProtectRouteTransporter
              Component={FormDrivers}
              path={"/transporter/drivers/form"}
            />
            <ProtectRouteShipper
              Component={Shipments}
              path={"/shipper/shipments"}
            />
            <ProtectRouteShipper
              Component={FormShipments}
              path={"/shipper/shipments/form"}
            />
            <ProtectRouteShipper
              Component={FormShipmentsAllocate}
              path={"/shipper/shipments/form/allocate"}
            />
          </Switch>
        </div>

        <Snackbar
          open={snackOpen}
          message={snackMessage}
          color={
            snackCategory === "error"
              ? "red"
              : snackCategory === "success"
              ? "#00a859"
              : "black"
          }
        />
      </AppProvider>
    </div>
  );
}

export default App;
