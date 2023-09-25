import React from "react"
import { Outlet } from "react-router-dom"

const LayoutAuth = () => {
  return(
    <div>
      Layout Auth
      <Outlet />
    </div>
  )
}

export default LayoutAuth