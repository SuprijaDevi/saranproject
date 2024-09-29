import React from 'react';
import './Home.css';

const Home = ({ selectedContent }) => {
  return (
    <div className="home-content">
      {selectedContent === 'Home' && <h1>Welcome to the Home Page!</h1>}
      {selectedContent === 'Calendar' && <h1>This is the Calendar section</h1>}
      {selectedContent === 'January' && <h1>January Schedule</h1>}
      {selectedContent === 'February' && <h1>February Schedule</h1>}
      {selectedContent === 'Subjects' && <h1>Subjects List</h1>}
      {selectedContent === 'Subject 1' && <h1>Details of Subject 1</h1>}
      {selectedContent === 'Subject 2' && <h1>Details of Subject 2</h1>}
      {selectedContent === 'Subject 3' && <h1>Details of Subject 3</h1>}
      {selectedContent === 'Timetable' && <h1>View the Timetable</h1>}
      {selectedContent === 'Application' && <h1>Application Forms</h1>}
      {selectedContent === 'Skill Set' && <h1>View Your Skills</h1>}
    </div>
  );
};

export default Home;
