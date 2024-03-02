import React from 'react';
import './App.css';
// Import your profile image here
// Make sure the path is correct if you move this file
import profileImage from './pic.png';

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
          <h2>Projects</h2>
          <div className="project-container">
            {/* Repeat this <div> for each project */}
            <div className="project-card">
              <h3>Project Title</h3>
              <p>Project description...</p>
              {/* ... other project information ... */}
            </div>
            {/* ... other project cards ... */}
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p>Programming Languages- C, C++, Java (OOPS, Data Structures and Algorithms), Python<br></br>
Cloud & System Operations- Linux, AWS (EC2, S3, RDS, Lambda - Familiar)<br></br>
Web Development & Design- HTML, CSS, JavaScript, React, React Router, Material UI <br></br>
Databases- MySQL</p>
        </section>
        <footer>
          <p>&copy; 2024 Parth Khillan</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
