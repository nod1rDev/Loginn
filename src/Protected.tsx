import { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

function Prodected({ children }: { children: React.ReactNode | any }) {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log("hi");

    auth.authStateReady().finally(() => setloading(false));
  }, []);

  if (loading) {
    return "Loading....!";
  } else {
    if (auth.currentUser) {
      return children;
    }

    return <Navigate to={"/signUp"}></Navigate>;
  }
}

export default Prodected;
