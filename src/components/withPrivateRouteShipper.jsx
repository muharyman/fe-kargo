import React from "react";
import AppContext from "../context/AppContext";
import { Redirect, Route } from "wouter";

export default function ProtectRoute({ Component, path }) {
  const { auth, user } = React.useContext(AppContext);
  if (auth && user === "Shipper") {
    return <Route component={Component} path={path} />;
  } else {
    return <Redirect to="/login" />;
  }
}
