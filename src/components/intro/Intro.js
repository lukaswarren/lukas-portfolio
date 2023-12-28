import React from 'react'
import './Intro.css'
import profile from '../../assets/profilePic.png'
import {Link} from 'react-scroll'

export const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello</span><br/>
            <span className='introText'> I'm<span className="introName"> Luke Warren </span><br/> <span className='title'>A Backend Software Engineer</span></span>
            <p className="introPara">I am software engineer with 7+ years experience in Backend Development</p>
            <Link><button className='hireBtn'>Hire Me</button></Link>
        </div>
        <img src={profile} alt='Profile' className="profilePic"/>
    </section>
  )
}

export default Intro;
