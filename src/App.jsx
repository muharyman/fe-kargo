import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, useLocation } from "wouter";

import { AppProvider } from "./context/AppContext.js";

import Login from "./pages/login";
import Sidebar from "./components/Sidebar";

function App() {
  const [location, setLocation] = useLocation();

  const [auth, setAuth] = React.useState(true);

  React.useEffect(() => {
    let token = localStorage.getItem("kargo-token");
    if (!token) {
      setAuth(false);
    }
  }, []);

  return (
    <>
      <AppProvider
        value={{
          auth,
          setAuth,
        }}
      >
        {!location.includes("/login") ? <Sidebar /> : null}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </AppProvider>
    </>
  );
}

export default App;
