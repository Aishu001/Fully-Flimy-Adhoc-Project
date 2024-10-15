import React from 'react'
import { Outlet } from 'react-router-dom'; 
import SideBar from './SideBar';
import '../Style/Admin.css'

function Layout() {
  return (
    <>
       <div className="layout">
     <SideBar/>
        <main className="content">
       {/* {children} */}
<Outlet/>
        </main>
      </div>
    </>
  )
}

export default Layout