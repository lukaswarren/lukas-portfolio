import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/envelope.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar">
           <img src={logo} alt="Logo" className="logo"/>
           <div className="menu">
                <Link className="menuListItem">Home</Link>
                <Link className="menuListItem">About</Link>
                <Link className="menuListItem">Projects</Link>
                <Link className="menuListItem">Social</Link>
            
            </div>
            <button className="menuBtn"> <img src={contactImg} alt="envelope" className="menuBtnImg" />Contact Me </button>
        </nav>
    )
}

export default Navbar