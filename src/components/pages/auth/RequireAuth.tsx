// import React from 'react'
// import { useLocation,Navigate,Outlet } from 'react-router-dom'
// const RequireAuth = () => {
//     const con = localStorage.getItem("con")
//     const location = useLocation()
//     console.log(location);

//   return (
//     con=="true"
//     ? <Outlet/>
//     :<Navigate to='/signin' state = {{from : location}} replace />
//   )
// }

// export default RequireAuth

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { useEffect } from "react";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

 
  return token !== "" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
