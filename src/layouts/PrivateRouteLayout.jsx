import { Outlet, useLocation, Navigate } from "react-router-dom"  // its going to render any children that is within the layout 
import { projectAuth } from "../pages/Firebase"

const PrivateRouteLayout = () => {
    const location = useLocation();

  return projectAuth.currentUser ? (<Outlet />) : (
    <Navigate to="/authentication" state={{from: location}} replace/>
  )
}

export default PrivateRouteLayout
