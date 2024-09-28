import React, { useState } from 'react';
import './Navbar.css'; 
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle, FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src='' alt='logo' />
          <FaBars className='bar-icon' onClick={toggleSidebar} />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="nav-icons">
          <IoIosNotifications className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </nav>

      <Sidebar open={sidebarOpen} />
    </div>
  );
};

export default Navbar;
