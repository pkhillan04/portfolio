import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import profileImage from './pic.png';
import img1 from './project-material/page-1.png';
import icon from './github.png';
import cImage from './skills/C.png';
import cppImage from './skills/c++.png';
import cssImage from './skills/css.png';
import htmlImage from './skills/html.png';
import javaImage from './skills/java.png';
import jsImage from './skills/js.png';
import linuxImage from './skills/linux.png';
import mysqlImage from './skills/mysql.png';
import perlImage from './skills/perl.png';
import pythonImage from './skills/python.png';
import reactImage from './skills/react.png';
import rubyImage from './skills/ruby.png';
import materialUIImage from './skills/material-ui.png';
import linkedin from './linkedin.png';
import gmail from './gmail.png';
import github from './github-1.png';
import project2 from './project-2.png';
import project3 from './project3.png';
import resume from './cv.png';
import playButton from './play.png';
import resumePDF from './Resume_Parth Khillan.pdf';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 300;
      const currentScrollY = window.scrollY + scrollOffset;

      const aboutTop = document.getElementById('about').offsetTop;
      const experienceTop = document.getElementById('experience').offsetTop;
      const projectsTop = document.getElementById('projects').offsetTop;
      const skillsTop = document.getElementById('skills').offsetTop;

      if (currentScrollY >= skillsTop) {
        setActiveSection('skills');
      } else if (currentScrollY >= projectsTop) {
        setActiveSection('projects');
      } else if (currentScrollY >= experienceTop) {
        setActiveSection('experience');
      } else if (currentScrollY >= aboutTop) {
        setActiveSection('about');
      } else {
        setActiveSection('');
      }
    };

    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorBackgroundStyle = {
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    backgroundColor: activeSection === 'skills' ? '#4b70ce' : '#4b70ce', // Set the color based on activeSection
  };
  return (
    <div className="App">
      {/* Parallax Stars */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="static-half">
        <section className="hero">
          <img src={profileImage} alt="Parth Khillan" className="img" />
          <h2 className='head'>Software Developer | Full Stack Engineer </h2>
        </section>
        <nav>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
          <a href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
        </nav>

        <footer>
          <div className="container-1">
            <a href="https://www.linkedin.com/in/parth-khillan-4a37861b3/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="linkedIn" />
            </a>
            <a href="https://github.com/pkhillan04" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="icon" />
            </a>
            <a href="mailto:pkhillan1@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={gmail} alt="Gmail" className="gmail" />
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <img src={resume} alt="Resume" className="icon" />
            </a>
          </div>
          <p>Loosely designed in CSS and coded in Visual Studio Code by yours truly. Built with React.js and Material UI, deployed with Netlify.<br></br>
            &copy; 2024 Parth Khillan</p>
        </footer>
      </div>
      <div className="scrollable-half">
        <section id="about">
          <h2>Hi, I’m Parth Khillan.</h2>
          <p>
            As a dedicated Software Engineer with a strong foundation in Computer Science, I excel in developing innovative and efficient software solutions. My expertise spans a broad range of programming languages, enabling me to tackle complex problems with a creative and analytical approach. I am committed to continuous learning and the adoption of cutting-edge technologies and methodologies, aiming to enhance software quality and performance. My passion for collaborative and innovative work environments drives me to contribute meaningfully to projects that seek to push the boundaries of technology.
          </p>
        </section>

        <section id="experience">
          <div className="container">
            <h2>Experience</h2>

            <div className="exp-card" tabIndex="0">
              <div className="exp-content">
                <div className="exp-date">
                  <p>Jan 2022 - July 2022</p>
                </div>
                <div className="exp-details">
                  <h3>Software Engineer Intern - WEBOVATE SOLUTIONS</h3>
                  <p>TASK TRACKER - Assisted in creating a simple, intuitive task management application using React
                    and Material-UI, focusing on enhancing UI/UX with responsive design and CSS.</p>
                  <p>BLOG PLATFORM - Supported the development of a lightweight blogging platform, leveraging
                    JavaScript for functionality and React.js for dynamic content rendering, ensuring a seamless user
                    experience.</p>
                </div>
              </div>
            </div>

            <div className="exp-card" tabIndex="0">
              <div className="exp-content">
                <div className="exp-date">
                  <p>May 2021 - Aug 2021</p>
                </div>
                <div className="exp-details">
                  <h3>Full Stack Developer Intern - BLOKMINERS</h3>
                  <p>GAMEPAY - Designed and developed a Full-Stack Defi marketplace platform, leveraging Web3 and
                    ReactJS for buying, selling, and creating NFTs.</p>
                  <p>UNICUS - Collaborated with a team of developers to create the frontend of a blockchain-based product
                    using Web3 and ReactJS.</p>
                </div>
              </div>
            </div>
          </div>
        </section >


        <section id="projects">
          <div className="container">
            <h2>Projects</h2>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Mighty-Moves</h3>
                <p>
                  Developed a fitness app website with a focus on responsive design and dynamic routing. Implemented a robust API for efficient data retrieval, an intuitive search box, and a seamless horizontal scrollbar to enhance user navigation. The project comprised features such as visually selecting body parts, displaying detailed exercise information, and creating visually appealing exercise cards. The result was a user-friendly website designed to optimize the overall fitness app experience.</p>
              </div>
              <a href="https://github.com/pkhillan04/fitnessApp" className="github-icon-link" target="_blank" rel="noopener noreferrer">
                <img className="icons" src={icon} alt="GitHub" />
              </a>
              <img className="project-image" src={img1} tabIndex="0" alt="Project 1" />
            </div>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Restaurant App</h3>
                <p>Developed a comprehensive restaurant management application, emphasizing seamless integration between front-end and back-end components to ensure a robust user experience. The frontend, built with React and styled using CSS, features a dynamic, single-page application architecture facilitated by Vite for efficient build optimization. Key frontend elements include a user-friendly interface with reservation systems, and customer management pages.</p>
                <a href="https://restaurant-app-khillan.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img className="icons" src={playButton} alt="GitHub" />
                </a>
              </div>
              <img className="project-image" src={project2} tabIndex="0" alt="Project 3" />
            </div>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Task-Scheduling</h3>
                <p>Guided the implementation of a Dijkstra's algorithm-based system, designing user-friendly interfaces for seamless task input. Utilized priority queues to prioritize duration or cost based on user preferences. Integrated path calculation, enhancing overall project management.</p>
              </div>
              <a href="https://github.com/pkhillan04/TaskScheduling" className="github-icon-link" target="_blank" rel="noopener noreferrer">
                <img className="icons" src={icon} alt="GitHub" />
              </a>
              <img className="project-image" src={project3} tabIndex="0" alt="Project 2" />
            </div>

          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <div className='container'>
            <div className="skill">
              <img src={cImage} alt="C" />
              <p>C</p>
            </div>
            <div className="skill">
              <img src={cppImage} alt="C++" />
              <p>C++</p>
            </div>
            <div className="skill">
              <img src={cssImage} alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src={htmlImage} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={javaImage} alt="Java" />
              <p>Java</p>
            </div>
            <div className="skill">
              <img src={jsImage} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={linuxImage} alt="Linux" />
              <p>Linux</p>
            </div>
            <div className="skill">
              <img src={materialUIImage} alt="Material-UI" />
              <p>Material-UI</p>
            </div>
            <div className="skill">
              <img src={mysqlImage} alt="MySQL" />
              <p>MySQL</p>
            </div>
            <div className="skill">
              <img src={perlImage} alt="Perl" />
              <p>Perl</p>
            </div>
            <div className="skill">
              <img src={pythonImage} alt="Python" />
              <p>Python</p>
            </div>
            <div className="skill">
              <img src={reactImage} alt="React" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src={rubyImage} alt="Ruby" />
              <p>Ruby</p>
            </div>
          </div>

        </section>
      </div >
      <div id="cursor" style={cursorBackgroundStyle}></div>
    </div >
  );
}

<footer>
  <div className="container-1">
    <a href="https://www.linkedin.com/in/parth-khillan-4a37861b3/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" className="linkedIn" />
    </a>
    <a href="https://github.com/pkhillan04" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" className="icon" />
    </a>
    <a href="mailto:pkhillan1@gmail.com" target="_blank" rel="noopener noreferrer">
      <img src={gmail} alt="Gmail" className="gmail" />
    </a>
    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
      <img src={resume} alt="Resume" className="icon" />
    </a>
  </div>
  <p>Loosely designed in CSS and coded in Visual Studio Code by yours truly. Built with React.js and Material UI, deployed with Netlify.<br></br>
    &copy; 2024 Parth Khillan</p>
</footer>

export default App;


