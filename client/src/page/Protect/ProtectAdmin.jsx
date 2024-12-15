import React from "react";
import { Navigate } from "react-router-dom";
const ProtectAdmin = ({ element }) => {
  //   const auth = localStorage.getItem("user");
  const auth = true;
  const role = true;
  return auth && role ? element : <Navigate to="/adminnotfound" />;
};

export default ProtectAdmin;
