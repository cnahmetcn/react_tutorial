import React from 'react'
import Menu from "../components/Menu";
import { Outlet } from 'react-router-dom';

const DashboardLayouts = () => {
  return (
    <div>
        <Menu />

        <div className="content">
            <Outlet />
        </div>

    </div>
  )
}

export default DashboardLayouts