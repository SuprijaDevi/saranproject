import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, setSelectedContent }) => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const handleToggle = (index, content) => {
    setActiveIndex(activeIndex === index ? null : index);
    setSelectedContent(content);
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'open'}`}> 
      <ul>
        <li onClick={() => handleToggle(1, 'Calendar')}> 
          Calendar
          {activeIndex === 1 && (
            <ul>
              <li onClick={() => setSelectedContent('January')}>January</li>
              <li onClick={() => setSelectedContent('February')}>February</li>
            </ul>
          )}
        </li>
        <li onClick={() => handleToggle(2, 'Subjects')}>
          Subjects
          {activeIndex === 2 && (
            <ul>
              <li onClick={() => setSelectedContent('Subject 1')}>Subject 1</li>
              <li onClick={() => setSelectedContent('Subject 2')}>Subject 2</li>
              <li onClick={() => setSelectedContent('Subject 3')}>Subject 3</li>
            </ul>
          )}
        </li>
        <li onClick={() => setSelectedContent('Timetable')}>Timetable</li>
        <li onClick={() => setSelectedContent('Application')}>Application</li>
        <li onClick={() => setSelectedContent('Skill Set')}>Skill Set</li>
      </ul>
    </div>
  );
};

export default Sidebar;
