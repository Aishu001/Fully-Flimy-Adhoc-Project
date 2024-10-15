import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Admin.css'

function SideBar() {
  return (
   <>
   <div className="sidebar">
      <ul>
        <li><Link to="dashboard">Dashboard</Link></li>
        <li>Product</li>
        <li>Customer</li>
      
      </ul>
    </div>
   
   </>
  )
}

export default SideBar