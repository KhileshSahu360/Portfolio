import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../../App.css' ;
import './Header.css'
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import TemporaryDrawer from '../MobileNav/MobileNav';

const Navigation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setSelected('Home') 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [selected,setSelected] = useState('Home')
  function handleWhatsAppClick() {
    const phoneNumber = '8629952220'; 
    const message = 'Hello, Khilesh!'; 
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }
  return (
    <nav>
      <div className="logo">
        <label htmlFor="">KHILESH</label>
      </div>
      <ul>
        <li>
          <Link to="Home" smooth={true} duration={500} style={{color:selected==='Home'?'#e6027d':'#08203a'}}  onClick={()=>setSelected('Home')}>Home</Link>
        </li>
         <li >
          <Link to="About" smooth={true} duration={500} style={{color:selected==='About'?'#e6027d':'#08203a'}} onClick={()=>setSelected('About')} >About</Link>
        </li>
         <li >
          <Link to="Services" smooth={true} duration={500} style={{color:selected==='Services'?'#e6027d':'#08203a'}} onClick={()=>setSelected('Services')}>Services</Link>
        </li>
         <li >
          <Link to="Portfolio" smooth={true} duration={500} style={{color:selected==='Portfolio'?'#e6027d':'#08203a'}} onClick={()=>setSelected('Portfolio')}>Portfolio</Link>
        </li>
         <li >
          <Link to="Skills" smooth={true} duration={500} style={{color:selected==='Skills'?'#e6027d':'#08203a'}} onClick={()=>setSelected('Skills')}>Skills</Link>
        </li>
         <li >
          <Link to="Contact" smooth={true} duration={500} style={{color:selected==='Contact'?'#e6027d':'#08203a'}} onClick={()=>setSelected('Contact')}>Contact</Link>
        </li>
      </ul>
      <div className="lets_chat">
        <button style={{textAlign:'center'}} onClick={handleWhatsAppClick}>Let's Chat<BiSolidMessageRoundedDots className='msg_icon'/></button>
      </div>
      <div className="menu_bar">
          <TemporaryDrawer style={{color:' red'}}/>
      </div>
    </nav>
  );
};

export default Navigation;
