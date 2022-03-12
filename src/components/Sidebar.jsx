import React, { useState, useContext } from "react";

import AppContext from "../context/AppContext";

export default function Sidebar() {
  const { auth, setAuth } = useContext(AppContext);

  const [user, setUser] = useState("");

  useEffect(() => {
    if (auth) {
      let token = localStorage.getItem("kargo-tech-token");
      setUser(token);
    }
  }, [auth, setUser]);

  return (
    <div>
      <p>Ayam</p>
    </div>
  );
}
