import React from 'react';
import './App.css';
import profileImage from './pic.png';
import img1 from './page-1.png'

function App() {
  return (
    <div className="App">
      <div className="static-half">
        <section className="hero">
          <h1>Parth Khillan</h1>
          <img src={profileImage} alt="Parth Khillan" className="img" />
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
            <div className="heading">
              <h2>Projects</h2>
            </div>

            <div className="project-card" tabIndex="0">
              <div className="project-details">
                <h3>Mighty-Moves</h3>
                <p>Tech Stack: React for front-end development, React Router for navigation, CSS for styling, and Material-UI for components and layout.
                  Designed and crafted a dynamic fitness app website using React, featuring responsive design and seamless dynamic routing. Introduced an intuitive horizontal scrolling menu to enhance user navigation and engagement.
                  Implemented interactive exercise cards, creating an immersive and user-friendly experience.
                  Carried out Analysis, Requirement understanding, feasibility, System designing, Implementation, and Testing.</p>
                <img src="github.png" alt="GitHub" /> Git
              </div>
              <img className="image" src={img1} tabIndex="0" alt="Project 1 Image" />
            </div>
          </div>

        </section >

        <section id="skills">
          <h2>Skills</h2>
          <p>Programming Languages- C, C++, Java (OOPS, Data Structures and Algorithms), Python<br />
            Cloud & System Operations- Linux, AWS (EC2, S3, RDS, Lambda - Familiar)<br />
            Web Development & Design- HTML, CSS, JavaScript, React, React Router, Material UI <br />
            Databases- MySQL</p>
        </section>
        <footer>
          <p>&copy; 2024 Parth Khillan</p>
        </footer>
      </div >
    </div >
  );
}

export default App;
