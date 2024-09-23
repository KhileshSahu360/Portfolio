import React from 'react'
import './Skills.css'
import { TitleHeading } from '../Services/Services'
import AccordionExpandDefault from './Accordion'
import { skillsData } from '../Data/Data'
import { TbCircleDot } from "react-icons/tb";
import MongoDB from '../../assets/Icon/MongoDB.svg'
import ReactIcon from '../../assets/Icon/React.svg'
import Node from '../../assets/Icon/Node.svg'
import Express from '../../assets/Icon/Express.svg'
import { motion } from 'framer-motion'
const transition= {
  duration : 0.5,
  delay : 0.2
}

const Skills = () => {
  const mernStyle = {
    height:'3rem',
    width: '3rem'
  }
  const sklData = skillsData();
  return (
    <div className='skills'>
      <motion.div
      initial={{y:'-50%',opacity:0}}
      whileInView={{y:'0%',opacity:1}}
      transition={transition}
       className="sk_top">
          <TitleHeading title={'Skills'} heading={'My Skills'}/>
      </motion.div>
      <div className="sk_middle">
        <motion.div
        initial={{x:'-20%',opacity:0}}
        whileInView={{x:'0%',opacity:1}}
        transition={transition}
         className="sm_left">
          <div><TbCircleDot fontSize={".9rem"} color='#e6027d'/><label htmlFor="">Proficient in HTML, CSS, and JavaScript, with a deep understanding of their core concepts.</label></div>
          <div><TbCircleDot fontSize={".9rem"} color='#e6027d'/><label htmlFor="">Experienced in building responsive and interactive web applications.</label></div>
          <div><TbCircleDot fontSize={".9rem"} color='#e6027d'/><label htmlFor="">Familiar with front-end frameworks like React and back-end technologies like Node.js.</label></div>
          <div><TbCircleDot fontSize={".9rem"} color='#e6027d'/><label htmlFor="">Skilled in database management with MongoDB.</label></div>
          <div><TbCircleDot fontSize={".9rem"} color='#e6027d'/><label htmlFor="">Currently learning advanced web development concepts to enhance project capabilities.</label></div>
        </motion.div>
        <motion.div
        initial={{opacity:0,rotate:-90}}
        whileInView={{opacity:1,rotate:0}}
        transition={{...transition,duration:1.5}}
         className="sm_right">
          <span className='mern_m'>M</span>
          <span className='mern_e'>E</span>
          <span className='mern_r'>R</span>
          <span className='mern_n'>N</span>
          <div className='mernicon m_icon'><img src={MongoDB} style={mernStyle} alt="" /></div>
          <div className='mernicon e_icon'><img src={Express} style={mernStyle} alt="" /></div>
          <div className='mernicon r_icon'><img src={ReactIcon} style={mernStyle} alt="" /></div>
          <div className='mernicon n_icon'><img src={Node} style={mernStyle} alt="" /></div>
        </motion.div>
      </div>
      <motion.div
      initial={{x:'-50%',opacity:0}}
      whileInView={{x:'0%',opacity:1}}
      transition={transition}
       className="sk_bottom">
          {
            sklData.map((elm)=>{
              return <AccordionExpandDefault key={elm.title} icon={elm.icon} title={elm.title} descr={elm.descr}/>            })
          }
      </motion.div>
    </div>
  )
}

export default Skills