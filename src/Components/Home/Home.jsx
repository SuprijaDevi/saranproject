import React from 'react';
import January from './January';
import February from './February';
import './Home.css';

const Home = ({ selectedContent }) => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        {selectedContent === 'Home' && <h1>Welcome to the Home Page!</h1>}
        
        {selectedContent === 'January' && <January />}
        {selectedContent === 'February' && <February />}

        {selectedContent === 'Subject 1' && <h1>Details of Subject 1</h1>}
        {selectedContent === 'Subject 2' && <h1>Details of Subject 2</h1>}
        {selectedContent === 'Subject 3' && <h1>Details of Subject 3</h1>}

        {selectedContent === 'Timetable' && <h1>View the Timetable</h1>}
        {selectedContent === 'Application' && <h1>Application Forms</h1>}
        {selectedContent === 'Skill Set' && <h1>View Your Skills</h1>}
      </div>

      <footer className="footer">
        <p>License v 1.0</p>
        <p className='footer-end'>Copyright &copy;2024</p>
      </footer>
    </div>
  );
};

export default Home;
