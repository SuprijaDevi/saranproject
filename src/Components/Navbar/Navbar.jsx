import React, { useState } from 'react';
import './Navbar.css'; 
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {

  const[open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='' alt='logo' />
        <FaBars className='bar-icon' onClick={toggleSidebar} />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-icons">
        <IoIosNotifications className="icon" onClick={() => {setOpen(!open)}}/>
        <FaUserCircle className="icon" />
        <div className = {`dropdown-menu ${open? 'active' : 'inactive'}`}>
        <p>Notifications</p>
      </div>
      </div>


    </nav>
  );
};

export default Navbar;
