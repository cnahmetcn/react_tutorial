import React from 'react'
import AuthMenu from "../components/AuthMenu";
import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
  return (
    <div>
        <AuthMenu />

        <div className="content">
            <Outlet />
        </div>

    </div>
  )
}

export default AuthLayouts