import React from 'react'
import "./About.css"

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>About</span>
        <div className="aboutContent">
            <p className="aboutPara">I got my Bachelors degree in Mathematics while minoring in Computer Science. After graduating I went on to work at a company called Clearwater Analytics.</p>
            <p className="aboutPara">There I helped build web-services in Java using SpringBoot and Maven. Working in data processing building maintaing ETLs that processed investment accounting data. </p>
            <p className="aboutPara">After 4 years at Clearwater I took some time off before starting as an Instructor and SME Engineer at Kenzie Academy.</p>
        </div>
    
    </section>
  )
}

export default About