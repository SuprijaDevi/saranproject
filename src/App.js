import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`main-container ${sidebarOpen ? '' : 'sidebar-open'}`}>
        <Sidebar isOpen={sidebarOpen} setSelectedContent={setSelectedContent} />
        <Home selectedContent={selectedContent} />
      </div>
    </div>
  );
}

export default App;
