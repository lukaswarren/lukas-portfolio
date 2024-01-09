import React from 'react'
import "./About.css"
import ClimbingPic from "../../assets/climbingPic.png"

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>About</span>
        <div className='aboutContainer'>
            <img src={ClimbingPic} className="aboutPic" alt='Climbing picture'/>
            <div className="aboutContent">
                <p className="aboutPara"> I got my Bachelors degree in Mathematics while minoring in Computer Science at Boise State. After graduating I went on to work at a company called Clearwater Analytics.</p><br/>
                <p className="aboutPara">There I helped build web-services in Java using SpringBoot and Maven. Working in data processing, building and maintaining ETLs that processed investment accounting data. </p><br/>
                <p className="aboutPara">After 4 and half years at Clearwater I took some time off before starting as an Instructor and SME Engineer at Kenzie Academy. There I've been helping teach students how to build web-services that run on AWS using Lambda and DynamoDB.</p>
            </div>
        </div>
    
    </section>
  )
}

export default About