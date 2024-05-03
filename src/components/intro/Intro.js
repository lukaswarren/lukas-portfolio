import React from 'react'
import './Intro.css'
import profile from '../../assets/profilePic.png'

export const Intro = () => {
 

  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello</span><br/>
            <span className='introText'> I'm<span className="introName"> Luke Warren </span><br/> <span className='title'>A Backend Software Engineer</span></span>
            <p className="introPara">I am software engineer with 7+ years experience in Backend Development</p>
            <div className='introBtns'>
              <a href="mailto:lukaswarren728@gmail.com" target="_blank" className='introLinks'><button className='hireBtn' >Hire Me</button></a>
              <a className='introLinks' href='https://lukaswarren.github.io/portfolio/LukasWarrenResume.pdf' download><button className='hireBtn' >Download My Resume</button></a>
            </div>
        </div>
        <img src={profile} alt='Profile' className="profilePic"/>
    </section>
  )
}

export default Intro;
