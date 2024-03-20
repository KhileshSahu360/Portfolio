import React, { useState } from 'react'
import MyPort2 from '../../assets/Image/MyPort2.svg'
import './About.css'
import Button from '../Button/Button'
import { useData } from '../Data/Data'
import { TbCircleDot } from "react-icons/tb";
import SkillProgressBar from '../SkillProgressBar/SkillProgressBar'
import { FaGraduationCap } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { motion } from 'framer-motion'


const About = () => {
  const {data} = useData();
  const [selected,setSelected] = useState('About Me')
  const handleClick=(btnName)=>{
    setSelected(btnName);
  }
  const transition= {
    duration : 0.5,
    delay : 0.2
  }
  return (
    <div
     className="about">
      <div className="ab_first">
        <img src={MyPort2} alt="" />
      </div>
      <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={transition} 
      className="ab_second">
        <label htmlFor="" className='pink'>About Me</label>
        <label htmlFor="">6 Month's Experience On</label>
        <label htmlFor="">React <label htmlFor="" className='pink'>Development</label>.</label>
        <label htmlFor="">In my 6-month journey as a MERN stack developer, I've had the opportunity to delve deep into the world of web development.</label>
        <div className="btn_grp">
          <Button style={selected==='About Me'?data.gradientBtn:data.waterBtn} btnName={'About Me'}  handleClick={(btnName)=>setSelected(btnName)}/>
          <Button style={selected==='Main Skills'?data.gradientBtn:data.waterBtn} btnName={'Main Skills'} handleClick={(btnName)=>handleClick(btnName)}/>
          <Button style={selected==='Educations'?data.gradientBtn:data.waterBtn} btnName={'Educations'} handleClick={(btnName)=>setSelected(btnName)}/>
        </div>
        {selected==='About Me' && <div className="about_me flex">
          <div><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/><label htmlFor="">Hello! I'm Khilesh, a passionate MERN stack developer.</label></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Introduction</span></div>
          <div><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/><label htmlFor="">I have 6 months of hands-on experience in building web applications using the MERN stack.</label></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Experience</span></div>
          <div><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/><label htmlFor="">Developed several web applications, including a to-do list app, a weather app, and a News App.</label></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Project's</span></div>
          <div><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/><label htmlFor="">Continuously learning and exploring new technologies to enhance my skills.</label></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Future Enhacement</span></div>
        </div>}
        {selected==='Main Skills' && <div className="main_skills flex">
          <div className="div"><label htmlFor="">Mongo DB</label><label htmlFor="">50%</label></div>
          <SkillProgressBar value={50}/>
          <div className="div"><label htmlFor="">Express JS</label><label htmlFor="">50%</label></div>
          <SkillProgressBar value={50}/>
          <div className="div"><label htmlFor="">React JS</label><label htmlFor="">70%</label></div>
          <SkillProgressBar value={70}/>
          <div className="div"><label htmlFor="">Next JS</label><label htmlFor="">20%</label></div>
          <SkillProgressBar value={20}/>
        </div>}
        {selected==='Educations' && <div className="educations flex">
          <div className="e_left space">
            <label htmlFor=""><FaGraduationCap />College</label>
            <div className="e_left_child style">
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>Diploma in Computer Science</label>
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>Govt. Polytechnic Khairagarh<FaLocationDot/></label>
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>Complete Year 2021-2024</label>
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>Average Percentage - 80%</label>
            </div>
          </div>
          <div className="e_right space">
            <label htmlFor=""><FaSchool/>School</label>
            <div className="e_right_child style">
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>12th Grade (CGBSE) - 2021</label>
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>G.B.H.S School Chhuikhadan</label>
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>Stream : Biology</label>
              <label htmlFor=""><TbCircleDot color={'#e6027d'} fontSize={'.8rem'}/>Percentage - 85%</label>
            </div>
          </div>
        </div>}
        <div className="btn" style={{marginTop:'.5rem'}}>
          <Button component={<FaDownload/>} style={data.waterBtn} resume={true} btnName={'Download CV'}/>
        </div>
      </motion.div>
    </div>
  )
}

export default About
