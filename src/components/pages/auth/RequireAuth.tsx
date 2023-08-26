import React from 'react'
import { useLocation,Navigate,Outlet } from 'react-router-dom'
const RequireAuth = () => {
    const con = localStorage.getItem("con")
    const location = useLocation()
    console.log(location);
    
  return (
    con=="true"
    ? <Outlet/>
    :<Navigate to='/signin' state = {{from : location}} replace />
  )
}

export default RequireAuth