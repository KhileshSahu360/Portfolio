import React from 'react';
import { Link } from 'react-scroll';
import '../../App.css' ;
import './Header.css'
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import TemporaryDrawer from '../MobileNav/MobileNav';

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <label htmlFor="">KHILESH</label>
      </div>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>Services</Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <div className="lets_chat">
        <button style={{textAlign:'center'}}>Let's Chat<BiSolidMessageRoundedDots className='msg_icon'/></button>
      </div>
      <div className="menu_bar">
          <TemporaryDrawer/>
      </div>
    </nav>
  );
};

export default Navigation;
