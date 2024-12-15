import React from 'react'
import { Navigate } from "react-router-dom";
const ProtectUser = ({ element }) => {
//   const auth = localStorage.getItem("user");
  const auth = true;
  return auth ? element : <Navigate to="/login" />;
};

export default ProtectUser