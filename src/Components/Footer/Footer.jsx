import React from 'react'
import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="content">
        <label htmlFor="">Stay Connected</label>
        <label htmlFor="">Email : khileshanjole@gmail.com</label>
        <label htmlFor="">Phone No. : +91 8629****20</label>
        <label htmlFor="">Address : Chhuikhadan District(K.C.G) India</label>
        <label htmlFor="">Follow Me : </label>
        <div className="social_icon">
          <label htmlFor=""><a href="https://github.com/KhileshSahu360" target='_blank'><FaGithub className='scl_icon github'/></a></label>
          <label htmlFor=""><a href="https://www.linkedin.com/in/khilesh-s-32b1a1235/" target='_blank'><FaLinkedin className='scl_icon linkedin'/></a></label>
          <label htmlFor=""><a href="https://www.instagram.com/khileshh_360/" target='_blank'><AiFillInstagram className='scl_icon instagram'/></a></label>
        </div>
        <label htmlFor="" className='wrights'>© 2024 KHILESH. All Rights Reserved."</label>
      </div>
    </div>
  )
}

export default Footer
