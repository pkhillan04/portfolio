import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <h1>Parth Khillan</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section class="hero">
          <img src="bg.png" alt="Hero background image"/>
            <h2>Software Development Engineer | Front End Engineer | Cloud Engineer</h2>
            <p>A passionate Software Engineer with a robust foundation in Computer Science, seeking to leverage expertise in
              cutting-edge projects across dynamic environments.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>I am a Software Engineer with a strong foundation in Computer Science and a passion for creating innovative
            and efficient software solutions. I am proficient in major programming languages and bring an analytical
            approach to problem-solving, prioritizing innovative solutions and technical excellence. I am committed to
            continuous learning and actively engage in the evolution of software practices, focusing on developing
            efficient and scalable solutions. I am also passionate about incorporating emerging technologies and
            methodologies to enhance software quality and performance, and I thrive in collaborative and innovative
            teams.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div class="project-card">
            <h3>Fitness App Website</h3>
            <p>Designed and created a dynamic fitness app website using React, featuring responsive design and seamless
              navigation. Implemented interactive exercise cards for an immersive user experience.</p>
          </div>
          <div class="project-card">
            <h3>Task Scheduling System</h3>
            <p>Developed a robust C++ console-based task scheduling system using Dijkstra's algorithm for optimal task
              optimization. Incorporated user-friendly features and ensured a stable and error-free system.</p>
          </div>
          <div class="project-card">
            <h3>Animated Car</h3>
            <p>Crafted a captivating web animation featuring a dynamically moving car on an interactive track with audio
              elements. Used HTML, CSS, and JavaScript for a cross-browser-compatible and mobile-responsive
              experience.</p>
          </div>
          <div class="project-card">
            <h3>Food Ordering System</h3>
            <p>Engineered a robust C++ console-based food ordering system with comprehensive functionality, including
              secure user authentication and a user-friendly rating system. Contributed to performance optimization
              efforts.</p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: C, C++, Java, Python</li>
            <li>Cloud & System Operations: Linux, AWS (Familiar with)</li>
            <li>Web Development and Web Design: HTML, CSS, JavaScript, React, React Router, Material UI</li>
            <li>Databases: MySQL</li>
            <li>Other Skills: Data Analysis, Software Architecture and Design, Debugging, Front-End Frameworks</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Get in touch with me!</p>
          <ul>
            <li>Email: pkhillan1@gmail.com</li>
            <li>Phone: (351) 667-6079</li>
            <li>LinkedIn: https://www.linkedin.com/in/parthkhilla/</li>
            <li>GitHub: https://github.com/ParthKhillan</li>
          </ul>
        </section>

        <footer>
          <p>&copy; 2024 Parth Khillan</p>
        </footer>
    </div>
  );
}

export default App;
