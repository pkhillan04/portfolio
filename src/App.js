import React from 'react';
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


function App() {
  return (
    <div className="App">
      {/* Parallax Stars */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="static-half">
        <section className="hero">
          <h1>Parth Khillan</h1>
          <img src={profileImage} alt="Parth Khillan" className="img" />
          <div className="container-1">
            <a href="https://www.linkedin.com/in/parth-khillan-4a37861b3/">
            <img src={linkedin} alt="LinkedIn" className="linkedIn" />
            </a>
            <a href="https://github.com/pkhillan04">
            <img src={icon} alt="GitHub" className="icon" />
            </a>
          </div>
          <h2>Software Developer | Frontend Engineer | Cloud Engineer</h2>
          <p>
            A passionate Software Engineer with a robust foundation in Computer
            Science, seeking to leverage expertise in cutting-edge projects
            across dynamic environments.
          </p>
        </section>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="scrollable-half">
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a Software Engineer with a strong foundation in Computer
            Science and a passion for creating innovative and efficient software
            solutions. I am proficient in major programming languages and bring
            an analytical approach to problem-solving, prioritizing innovative
            solutions and technical excellence. I am committed to continuous
            learning and actively engage in the evolution of software practices,
            focusing on developing efficient and scalable solutions. I am also
            passionate about incorporating emerging technologies and
            methodologies to enhance software quality and performance, and I
            thrive in collaborative and innovative teams.
          </p>
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
              <img className="image project-image" src={img1} tabIndex="0" alt="Project 1 Image" />
            </div>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Mighty-Moves</h3>
                <p>Tech Stack: React for front-end development, React Router for navigation, CSS for styling, and Material-UI for components and layout. Designed and crafted a dynamic fitness app website using React, featuring responsive design and seamless dynamic routing. Introduced an intuitive horizontal scrolling menu to enhance user navigation and engagement. Implemented interactive exercise cards, creating an immersive and user-friendly experience. Carried out Analysis, Requirement understanding, feasibility, System designing, Implementation, and Testing.</p>
                <a href="https://github.com/pkhillan04/fitnessApp">
                  <img className="icons" src={icon} alt="GitHub" />
                </a>
              </div>
              <img className="image project-image" src={img1} tabIndex="0" alt="Project 1 Image" />
            </div>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Mighty-Moves</h3>
                <p>Tech Stack: React for front-end development, React Router for navigation, CSS for styling, and Material-UI for components and layout. Designed and crafted a dynamic fitness app website using React, featuring responsive design and seamless dynamic routing. Introduced an intuitive horizontal scrolling menu to enhance user navigation and engagement. Implemented interactive exercise cards, creating an immersive and user-friendly experience. Carried out Analysis, Requirement understanding, feasibility, System designing, Implementation, and Testing.</p>
                <a href="https://github.com/pkhillan04/fitnessApp">
                  <img className="icons" src={icon} alt="GitHub" />
                </a>
              </div>
              <img className="image project-image" src={img1} tabIndex="0" alt="Project 1 Image" />
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
        <footer>
          <p>&copy; 2024 Parth Khillan</p>
        </footer>
      </div>
    </div >
  );
}

export default App;
