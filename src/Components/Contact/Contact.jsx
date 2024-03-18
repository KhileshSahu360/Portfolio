import React, { useRef } from 'react'
import { TitleHeading } from '../Services/Services'
import './Contact.css'
import Button from '../Button/Button';
import { useData } from '../Data/Data';
import ContactImage from '../../assets/Image/ContactImage.jpg'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { motion } from 'framer-motion'
const transition= {
  duration : 0.5,
  delay : 0.2
}

const Contact = () => {
  const firesRef = useRef('');
  const lastRef = useRef('');
  const emailRef = useRef('');
  const subjectRef = useRef('');
  const messageRef = useRef('');
  const {data} = useData();
  return (
    <div className='contact'>
      <motion.div
      initial={{y:'-50%',opacity:0}}
      whileInView={{y:'0%',opacity:1}}
      transition={transition} 
      className="c_top">
        <TitleHeading title={'Contact Me'} heading={'Get in Touch With Me.'}/>
      </motion.div>
      <div className="c_bottom">
        <motion.div
        initial={{x:'-50%',opacity:0}}
        whileInView={{x:'0%',opacity:1}}
        transition={transition}
         className="cb_left">
          <div className='firstlast_name'>
            <input type="text" placeholder='First Name' ref={firesRef}/>
            <input type="text" placeholder='Last Name' ref={lastRef}/>
          </div>
          <div className='email'>
            <input type="email" placeholder='Email' ref={emailRef}/>
          </div>
          <div className='subject'>
            <input type="text" placeholder='Subject' ref={subjectRef}/>
          </div>
          <div className='message'>
            <textarea placeholder='Message' ref={messageRef} name="" id="" cols="5" rows="2"></textarea>
          </div>
          <div className='button'>
            <Button btnName={'Submit Now'} style={{...data.gradientBtn,borderRadius:'5px'}}/>
          </div>
        </motion.div>
        <motion.div
        initial={{x:'50%',opacity:0}}
        whileInView={{x:'0%',opacity:1}}
        transition={transition}
         className="cb_right">
            <div className="cbr_top">
              <img src={ContactImage} alt="" style={{height:'16rem',width:'21.5rem',borderRadius:'10px'}}/>
            </div>
            <div className="cbr_bottom">
              <div className="msg_icon" style={{display:'flex',alignItems:'center'}}>
                <MdOutlineMarkEmailRead fontSize={'2rem'} className='email_icon' />
              </div>
              <div className="number">
                <label htmlFor="">+91 8629****20</label>
                <label htmlFor=""><a href="mailto:khileshanjole@gmail.com">khileshanjole@gmail.com</a></label>
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
