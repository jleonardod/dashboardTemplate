import React from "react"
import { Outlet } from "react-router-dom"

const LayoutAdmin = () => {
  return(
    <div>
      Layout Admin
      <Outlet />
    </div>
  )
}

export default LayoutAdmin