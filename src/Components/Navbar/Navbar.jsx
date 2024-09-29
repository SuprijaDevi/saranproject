import React, { useState } from 'react';
import './Navbar.css'; 
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle, FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Toggle sidebar state
  const [selectedContent, setSelectedContent] = useState('Home'); // Manage selected content

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the sidebar open/close state
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

      
      <Sidebar isOpen={sidebarOpen} setSelectedContent={setSelectedContent} /> 
      
      
      <Home selectedContent={selectedContent} />
    </div>
  );
};

export default Navbar;
