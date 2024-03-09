import React, { useState, useEffect } from 'react';

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
import resume from './cv.png';
import resumePDF from './Parth Khillan_Resume.pdf';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Offset to trigger the change before reaching the section
      const scrollOffset = 300; // Adjust this value as needed

      // Get the current scroll position plus the offset
      const currentScrollY = window.scrollY + scrollOffset;

      // Get sections top position
      const aboutTop = document.getElementById('about').offsetTop;
      const experienceTop = document.getElementById('experience').offsetTop;
      const projectsTop = document.getElementById('projects').offsetTop;
      const skillsTop = document.getElementById('skills').offsetTop;

      // Update activeSection state based on scroll position
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

    // Add and remove the event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      {/* Parallax Stars */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="static-half">
        <section className="hero">
          <img src={profileImage} alt="Parth Khillan" className="img" />
          <div className="container-1">
            <a href="https://www.linkedin.com/in/parth-khillan-4a37861b3/">
              <img src={linkedin} alt="LinkedIn" className="linkedIn" />
            </a>
            <a href="https://github.com/pkhillan04">
              <img src={github} alt="GitHub" className="icon" />
            </a>
            <a href="mailto:pkhillan1@gmail.com">
              <img src={gmail} alt="Gmail" className="gmail" />
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <img src={resume} alt="Resume" className="icon" />
            </a>
          </div>
          <h2>Software Developer | Full Stack Engineer </h2>
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
          <h2>Professional Experience</h2>
          <div className="container">
            <div className="timeline">
              <div className="entry">
                <div className="entry1">
                  <div className="title">May 2021 – August 2021</div>
                  <div className="content">
                    <h3>Full Stack Developer</h3>
                    <h4>BLOKMINERS - Internship</h4>
                    <p>GAMEPAY - Designed and developed a Full-Stack Defi marketplace platform, leveraging Web3 and ReactJS for buying, selling and creating NFTs.
                      UNICUS - Collaborated with a team of developers to create the frontend of a blockchain-based product using Web3 and ReactJS.</p>
                  </div>
                  <div className="arrow-left"></div>
                </div>
              </div>
              <div className="entry">
                <div className="entry2">
                  <div className="title">January 2022 – July 2022</div>
                  <div className="content">
                    <h3>Software Engineer Intern</h3>
                    <h4>WEBNOVATE SOLUTIONS - Internship</h4>
                    <p>
                      TASK TRACKER - Assisted in creating a simple, intuitive task management application using React and Material-UI, focusing on enhancing UI/UX with responsive design and CSS.
                      BLOG PLATFORM - Supported the development of a lightweight blogging platform, leveraging JavaScript for functionality and React for dynamic content rendering, ensuring a seamless user experience.
                    </p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2>Projects</h2>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Mighty-Moves</h3>
                <p>Tech Stack: React for front-end development, React Router for navigation, CSS for styling, and Material-UI for components and layout. Designed and crafted a dynamic fitness app website using React, featuring responsive design and seamless dynamic routing. Introduced an intuitive horizontal scrolling menu to enhance user navigation and engagement. Implemented interactive exercise cards, creating an immersive and user-friendly experience. Carried out Analysis, Requirement understanding, feasibility, System designing, Implementation, and Testing.</p>
                <a href="https://github.com/pkhillan04/fitnessApp">
                  <img className="icons" src={icon} alt="GitHub" />
                </a>
              </div>
              <img className="project-image" src={img1} tabIndex="0" alt="Project 1" />
            </div>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Animated-Car</h3>
                <p>Tech Stack: HTML, CSS for styling and animation, and JavaScript for audio integration and interactivity.Crafted a captivating web animation featuring a dynamically moving car on an interactive track enriched with audio elements.
                  Implemented using a skillful combination of HTML, CSS, and JavaScript to deliver an immersive and visually compelling user experience.
                  Applied best practices in web development to create cross-browser-compatible and mobile-responsive websites.</p>
                <a href="https://github.com/pkhillan04/AnimatedCar">
                  <img className="icons" src={icon} alt="GitHub" />
                </a>
              </div>
              <img className="project-image" src={project2} tabIndex="0" alt="Project 2" />
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
      </div>
    </div >
  );
}

export default App;


