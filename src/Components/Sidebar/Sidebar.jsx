import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ open }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`sidebar ${open ? '' : 'open'}`}>
      <ul>
        <li onClick={() => handleToggle(1)}>
          Heading 1
          {activeIndex === 1 && (
            <ul>
              <li>Subheading 1</li>
              <li>Subheading 2</li>
            </ul>
          )}
        </li>
        <li onClick={() => handleToggle(2)}>
          Heading 2
          {activeIndex === 2 && (
            <ul>
              <li>Subheading 1</li>
              <li>Subheading 2</li>
              <li>Subheading 3</li>
            </ul>
          )}
        </li>
        <li onClick={() => handleToggle(3)}>Heading 3</li>
        <li onClick={() => handleToggle(4)}>Heading 4</li>
        <li onClick={() => handleToggle(5)}>Heading 5</li>
      </ul>
    </div>
  );
};

export default Sidebar;
