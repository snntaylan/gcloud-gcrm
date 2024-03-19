import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import LazyRoute from "./LazyRoute"
import PrivateRoute from "./PrivateRoute"
import React from "react"
import RoleBasedRoutes from "./RoleBasedRoutes"

//Layout
const LoggedInLayout = React.lazy(() => import("../layout/loggedin"))

const GCRModule = React.lazy(() => import("../pages/modules/gcrm"))


const RouterConfig = () => {
  const isAuthenticated = true;

  return (
    <Routes>
      <Route path={"/"} element={<GCRModule />}></Route>
    </Routes>
  )
}

export default RouterConfig