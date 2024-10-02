import React from 'react';
import January from './January';
import February from './February';
import { BsChatSquareDotsFill } from "react-icons/bs";
import './Home.css';

const Home = ({ selectedContent, collapse }) => {
  const breadcrumbMap = {
    'Home': '/home',
    'January': '/calendar/january',
    'February': '/calendar/february',
    'Subject 1': '/subjects/subject 1',
    'Subject 2': '/subjects/subject 2',
    'Subject 3': '/subjects/subject 3',
    'Timetable': '/timetable',
    'Application': '/application',
    'Skill Set': '/skill-set'
  };

  const breadcrumb = breadcrumbMap[selectedContent] || '';

  return (
    <div className={`home-wrapper`}>
      <div className="home-content">
        <header className={`breadcrumbs`}>
          <p>{breadcrumb}</p>
        </header>
          {selectedContent === 'Home' && <h1>Welcome to the Home Page!</h1>}
          {selectedContent === 'January' && <January />}
          {selectedContent === 'February' && <February />}
          {selectedContent === 'Subject 1' && <h1>Details of Subject 1</h1>}
          {selectedContent === 'Subject 2' && <h1>Details of Subject 2</h1>}
          {selectedContent === 'Subject 3' && <h1>Details of Subject 3</h1>}
          {selectedContent === 'Timetable' && <h1>View the Timetable</h1>}
          {selectedContent === 'Application' && <h1>Application Forms</h1>}
          {selectedContent === 'Skill Set' && <h1>View Your Skills</h1>}

          <BsChatSquareDotsFill className='chat-icon'/>
      </div>

      <footer className={`footer`}>
        <p>License v 1.0</p>
        <p className="footer-end">Copyright &copy;2024</p>
      </footer>
    </div>
  );
};

export default Home;
