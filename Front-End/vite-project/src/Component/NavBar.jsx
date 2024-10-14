import React from 'react';
import '../Style/NavBar.css'
import { CiUser } from "react-icons/ci";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Add your logo here */}
        <img src="[removal.ai]_2d56b8d9-51f1-46b5-b884-b6e52f8f7b40-free-simple-modern-circle-design-studio-logo.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        {/* List your menu items here */}
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-user">
      
        <CiUser />
      </div>
    </nav>
  );
}

export default NavBar;
