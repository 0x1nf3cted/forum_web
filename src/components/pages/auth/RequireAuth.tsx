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

const RequireAuth = () => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);

  console.log("token is: ", token);

  // Check if the token is not empty
  if (token.length !== 0) {
    return <Outlet />;
  }

  // Redirect to the signin page with the "from" state
  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default RequireAuth;
