import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import './App.css';
import ChatSidebar from './Components/Home/ChatSidebar';
import { BsChatSquareDotsFill } from "react-icons/bs";

function App() {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatSidebarOpen, setChatSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleChatSidebar = () => {
    setChatSidebarOpen(!chatSidebarOpen);
  }

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`main-container ${sidebarOpen ? 'sidebar-open' : ''} ${chatSidebarOpen ? 'chatsidebar-open' : ''}`}>
        <Sidebar isOpen={sidebarOpen} setSelectedContent={setSelectedContent} />
        <Home selectedContent={selectedContent} collapse={!sidebarOpen} toggleChatSidebar={toggleChatSidebar} />
        <ChatSidebar isOpen={chatSidebarOpen} />
        <BsChatSquareDotsFill 
          className={`chat-icon ${chatSidebarOpen ? 'open' : ''}`} 
          onClick={toggleChatSidebar} 
        />
      </div>
    </div>
  );
}

export default App;
