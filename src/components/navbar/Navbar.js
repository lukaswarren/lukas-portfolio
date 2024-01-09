import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/envelope.png'
import { Link } from 'react-scroll'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="navbar">
           <img src={logo} alt="Logo" className="logo"/>
           <div className="menu">
                    <Link to="intro" smooth={true} duration={600} offset={-50} className="menuListItem">Home</Link>
                    <Link to="projects" smooth={true} duration={600} offset={-50} className="menuListItem">Projects</Link>
                    <Link to="skills" smooth={true} duration={600} offset={-50} className="menuListItem">Skills</Link>
                    <Link to="about" smooth={true} duration={600} offset={-50} className="menuListItem">About</Link>
                    <Link to="social" smooth={true} duration={600} offset={-50} className="menuListItem">Social</Link>
            </div>
            <a href="mailto:lukaswarren728@gmail.com" target="_blank" className="mailLink"><button className="menuBtn"> <img src={contactImg} alt="envelope" className="menuBtnImg" />Contact Me </button></a>
        </nav>
    )
}

export default Navbar