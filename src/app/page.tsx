'use client';

import React, { useEffect, useRef, useState } from 'react';
import './portfolio.css';
import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa6';
import Image from 'next/image';

// Skills data - easy to edit!
const skillsData = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'jQuery', level: 70 }
  ],
  backend: [
    { name: 'Node.js', level: 58 },
    { name: 'Python (Django)', level: 65 },
    { name: 'Express.js', level: 42 },
    { name: 'MySQL', level: 58 },
    { name: 'MongoDB', level: 58 }
  ],
  tools: [
    { name: 'Git', level: 92 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 30 },
    { name: 'CI/CD', level: 80 },
    { name: 'Coffee-Machine', level: 100 }
  ]
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const contactRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Trigger fade-in animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setShowContactPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 ${isLoaded ? 'fade-in' : 'fade-out'}`}>
      {/* Header */}
      <header className="header">
        <div className="portfolio-container">
          <div className="flex justify-between items-center py-6">
            <div className="logo-container">
              <div className="logo-placeholder">
                <span className="logo-text">RT</span>
              </div>
              <h1 className="brand-name">Rowe T.A. Tampus</h1>
            </div>
            <nav className="nav">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#experience" className="nav-link">Experience</a>
              <span className="popover" ref={contactRef}>
                <button
                  type="button"
                  className="nav-link as-button"
                  aria-haspopup="dialog"
                  aria-expanded={showContactPopup}
                  onClick={() => setShowContactPopup((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setShowContactPopup((v) => !v);
                    }
                  }}
                >
                  Contact
                </button>
                {showContactPopup && (
                  <div role="dialog" aria-label="Contact Email" className="popover-box">
                    <div className="popover-title">Get in touch</div>
                    <div className="popover-content">
                      <a href="mailto:ruvier20144@gmail.com" className="popover-email">ruvier20144@gmail.com</a>
                      <p className="popover-hint">Click to open your mail app</p>
                    </div>
                  </div>
                )}
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Animated wavy background */}
        <div className="hero-background">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
                <path 
                  className="animate-wave-slow"
                  d="M0,200 C300,100 600,300 900,200 C1100,150 1200,250 1200,200 L1200,400 L0,400 Z" 
                  fill="rgba(255,255,255,0.1)"
                />
                <path 
                  className="animate-wave-slower"
                  d="M0,250 C400,150 700,350 1000,250 C1150,200 1200,300 1200,250 L1200,400 L0,400 Z" 
                  fill="rgba(255,255,255,0.05)"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I&apos;m Rowe
          </h1>
          <br />
          <h1 className="hero-title">
          I&apos;m a Software Engineer
          </h1>
          <p className="hero-subtitle">
            Building exceptional digital experiences with clean code and innovative solutions
          </p>
          <div className="hero-buttons">
            <Link href="https://github.com/Ruvier14" className="btn btn-primary">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        {/* Animated Code Lines */}
        <div className="code-line-1">const developer = &quot;Rowe&quot;;</div>
        <div className="code-line-2">function createPortfolio() {'{'}</div>
        <div className="code-line-3">return &lt;Awesome /&gt;;</div>
        <div className="code-line-4">{/* Full-Stack Developer */}</div>
        <div className="code-line-5">const skills = [&apos;React&apos;, &apos;Node.js&apos;];</div>
        <div className="code-line-6">export default Portfolio;</div>
        <div className="code-line-7">const experience = 2;</div>
        <div className="code-line-8">if (codeQuality === &apos;high&apos;) {'{'}</div>
        <div className="code-line-9">console.log(&apos;Success!&apos;);</div>
        <div className="code-line-10">const passion = &apos;coding&apos;;</div>
        <div className="code-line-11">{/* Always learning */}</div>
        <div className="code-line-12">const future = &apos;bright&apos;;</div>
        
        <div className="portfolio-container">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate software engineer with expertise in full-stack development
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m a dedicated software engineer with over 2 years of experience in building 
                scalable web applications and solving complex technical challenges. I specialize 
                in modern web technologies and love creating user-friendly applications that 
                make a real difference.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I bring 
                ideas to life through clean, maintainable code and intuitive user experiences. 
                I&apos;m always eager to learn new technologies and stay current with industry trends.
              </p>
              <div className="about-buttons">
                <button 
                  id="downloadBtn"
                  className="btn btn-secondary"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/RT_Resume.pdf'; // Your resume file path
                    link.download = 'Rowe_Tampus_Resume.pdf'; // Suggested filename
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download Resume
                </button>
                <button className="btn btn-tertiary">
                <Link href="https://www.linkedin.com/in/rowe-terre-antoine-a-tampus-664963223"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                   Learn More 
                   <FaLinkedin size={20}/>
                </Link>
                </button>
              </div>
            </div>
            
            <div className="profile-photo">
              <div className="photo-placeholder">
                <span className="placeholder-text">
                  <Image src="/profilepic.JPG" alt="Profile" width={320} height={400} className="profile-image" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="portfolio-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              Technologies and tools I work with on a daily basis
            </p>
          </div>
          
          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-card">
              <h3>Frontend</h3>
              <div className="space-y-3">
                {skillsData.frontend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="skill-card">
              <h3>Backend</h3>
              <div className="space-y-3">
                {skillsData.backend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skill-card">
              <h3>Tools & DevOps</h3>
              <div className="space-y-3">
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Docker</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">AWS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CI/CD</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">C#/.NET</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="portfolio-container">
          <div className="section-header text-center">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and technical achievements
            </p>
          </div>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
                              <div className="project-image">
                  <Image src="/netflixapp.png" alt="Netflix CRUD-like App Screenshot" className="project-img" width={400} height={200} />
                </div>
              <div className="project-content">
                <h3 className="project-title">Netflix CRUD-like App</h3>
                <p className="project-description">
                  A full-stack Movie CRUD platform built with React, Node.js, Django and SQLLite. 
                  Features include basic movie edits, back-end calling, edit title, descriptions, and uploads.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">SQL-Lite</span>
                  <span className="tech-tag">Django</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Ruvier14/netflix-movie-app" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
                              <div className="project-image">
                  <Image src="/stockphony.png" alt="stockphony website" className="project-img" width={400} height={200} />
                </div>
              <div className="project-content">
                <h3 className="project-title">Stock Website - Stockphony</h3>
                <p className="project-description">
                  A collaborative project that integrates Yahoo stock API, CRUD management updates on stocks being added, with real time stock data, user authentication, MongoDB user storage, and basic trading functions.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Axios</span>
                  <span className="tech-tag">BootStrap</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="https://nugrezo.github.io/stockphony/#/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
                              <div className="project-image">
                  <Image src="/quickstart.png" alt="Gemini API Project" className="project-img" width={400} height={200} />
                </div>
              <div className="project-content">
                <h3 className="project-title">Gemini AI Clone - API Integration Project</h3>
                <p className="project-description">
                  A personal project learning about AI and API integration, while trying to closely clone Gemini website and also integrating LLM functionality.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Gemini API</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Bot Scripts</span>
                  <span className="tech-tag">Front-End</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Ruvier14/API-Gemini-AI-Integration-Clone" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
      
                
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
                              <div className="project-image">
                  <Image src="/notesimg.png" alt="Notes App Web" className="project-img" width={400} height={200} />
                </div>
              <div className="project-content">
                <h3 className="project-title">Note Taking MERN Stack App</h3>
                <p className="project-description">
                  A basic note taking app built with good fundamentals of using MERN stack. Features include editing, deleting instance of notes, and adding new notes with nice UI design. *Still in development*
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">Nextjs</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Ruvier14/mern-notes-app" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                  <a href="https://mern-notes-app-fe.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="portfolio-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              My professional experience and software development journey
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="experience-item">
              <div className="experience-header"> 
                <h3 className="experience-title">Product Engineer</h3>
                <p className="experience-company">Relentless Returns - FinTech Company</p>
              </div>
              <div className="experience-content">
                <p className="experience-description">
                As a Product Engineer, I streamlined cross-functional collaboration between executives, engineers, 
                and designers, boosting feature delivery speed by 15% and resolving 25+ critical bugs. 
                Leveraging Agile methods, I delivered 10 key features ahead of 
                schedule while gaining experience in product development, financial markets, and data analytics.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">React</span>
                  <span className="experience-tag">Node.js</span>
                  <span className="experience-tag">Figma</span>
                  <span className="experience-tag">TypeScript</span>
                  <span className="experience-tag">Agile</span>
                  <span className="experience-tag">Slack</span>
                  <span className="experience-tag">Wireframing</span>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="experience-item">
              <div className="experience-header"> 
                <h3 className="experience-title">Freelance Software Developer</h3>
                <p className="experience-company">Self-Employed</p>
              </div>
              <div className="experience-content">
                <p className="experience-description">
                Freelance software developer with experience building full-stack web applications using React, Next.js, Node.js, and Laravel. I specialize in creating scalable, user-friendly solutions and have worked on projects
                ranging from APIs to cloud-hosted apps for startups and small teams.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">React</span>
                  <span className="experience-tag">Node.js</span>
                  <span className="experience-tag">Next.js</span>
                  <span className="experience-tag">FullStack</span>
                  <span className="experience-tag">Backend Engineering</span>
                  <span className="experience-tag">Tailwind CSS</span>
                  <span className="experience-tag">Design</span>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Business Analyst/Automation</h3>
                <p className="experience-company">Rose Industries</p>
              </div>
              <div className="experience-content">
                <p className="experience-description">
                As a Business Analyst/Automation, I streamlined business processes by automating 
                manual tasks and improving data accuracy. I also provided technical support to 
                the business, troubleshooting issues and implementing new solutions.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">Bash</span>
                  <span className="experience-tag">Python</span>
                  <span className="experience-tag">MicrosoftSQL</span>
                  <span className="experience-tag">Excel</span>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Customer Service / Item Distributor</h3>
                <p className="experience-company">Military Commisary AAFES</p>
              </div>
              <div className="experience-content">
                <p className="experience-description">
                  As a Customer Service / Item Distributor, I provided customer service to military personnel
                   and their families, and distributed items to the commisary.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">Sales</span>
                  <span className="experience-tag">Communication</span>
                  <span className="experience-tag">Inventory Checks</span>
                  <span className="experience-tag">Teamwork</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="portfolio-container text-center">
          <p className="footer-text">&copy; {new Date().getFullYear()} Rowe Tampus. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/Ruvier14" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/rowe-terre-antoine-a-tampus-664963223" className="footer-link">LinkedIn</a>
            <a href="mailto:ruvier20144@gmail.com" className="footer-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
// test