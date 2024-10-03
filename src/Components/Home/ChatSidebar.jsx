import React from 'react';
import './Home.css';

const ChatSidebar = ({ isOpen }) => {
  return (
    <div className={`chat-sidebar ${isOpen ? '' : 'open'}`}>
      <p>Chat Box</p>
    </div>
  )
}

export default ChatSidebar;