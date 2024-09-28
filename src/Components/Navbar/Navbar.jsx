import React from 'react';
import './Navbar.css'; 
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src='' alt='logo'></img>
        <FaBars className='bar-icon'/>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-icons">
        <IoIosNotifications className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
