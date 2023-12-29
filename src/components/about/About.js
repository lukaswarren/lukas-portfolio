import React from 'react';
import './About.css';
import SkillsLogo from '../../assets/skillslogo.png';

const About = () => {
  return (
    <section id ='skills'>
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>Glad your here! I'm a software engineer specializing in backend development.  I have worked on Agile teams building web services, ETLs, and internal tools. I have a fascination with languages and interpreters, as well as system design. Below you'll see some the technologies, methodologies and environments I've worked in and with. Please check it out!</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={SkillsLogo} alt='skill logo' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Technologies</h2>
              <p>Java, SQL, Git, SVN, Kubernetes, Docker, Helm, AWS, Spring, Jersey, Python, Jenkins, Gradle, Jenkins, Maven </p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={SkillsLogo} alt='skill logo' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Methodoligies </h2>
              <p>Object‐Oriented Design, Test-Driven Development, Agile and Scrum, REST, Micro-services, Cloud Architecture</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={SkillsLogo} alt='skill logo' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Soft Skills</h2>
              <p>Programming in a team environment, communicating requirements, problem solving, inter- and intra-team collaboration, facilitating brainstorming sessions, conflict resolution, interpersonal communication</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About