import React from 'react'
import './Home.css'
import Button from '../Button/Button'
// import { WaterButton } from '../Button/Button'
import Avatar from '../../assets/Image/Avatar.png'
import GlassyEmoji from '../../assets/Icon/GlassyEmoji.png'
import ReactIcon from '../../assets/Icon/React.svg'
import BootstrapIcon from '../../assets/Icon/BootstrapIcon.svg'
import { useData } from '../Data/Data'
import { FaDownload } from "react-icons/fa";
import { motion } from 'framer-motion'

const transition= {
  duration : 0.5,
  delay : 0.2
}
const Home = () => {
  const {data} = useData();

  return (
    <div className='home'>
      <div
          
       className="first">
        <label htmlFor="">KHILESH</label><br />
        <label htmlFor="" className='sahu'>SAHU</label>
      </div>
      <motion.div
      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={transition}
       className="second">
          <label htmlFor="" className='hii'>Hi I'm 
            <label htmlFor="" className='name'> Khilesh</label>
          </label>
          <label htmlFor="">
            <label htmlFor="">MERN</label> Stack Web Developer
          </label>
          <label htmlFor="">
              Welcome to my portfolio! I'm a MERN stack developer passionate about creating dynamic and user-friendly web applications.
          </label>
          <div className="button_grp">
           
              <Button style={data.gradientBtn} btnName={'Hire Me'}/>
              <Button style={data.waterBtn} btnName={'Download CV'} component={<FaDownload />}/>
           
          </div>

      </motion.div>
      <div className="third" >
        <div className="img_div">
          <motion.img
          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1}}
          transition={transition}
           src={Avatar} alt="" style={{height:'auto',width:'300px',zIndex:'100'}}/>
        </div>
        <div  className="icon">
            <IconEmoji iconName={GlassyEmoji} position={{top:'-10%',left:'-1%'}} classes={'glassy_emoji'}/>
          <motion.div
          initial={{right:'0%',opacity:0}}
          whileInView={{right:'9%',opacity:1}}
          transition={{duration:1,delay:0.2}}
           className="react_cont" style={{position:'absolute',top:'-14%',right:'9%'}}>
            <IconEmoji iconName={ReactIcon} position={{height:'50px',position:'relative',top:'8.5%',left:'9%'}}/>
            <label htmlFor="">React <br />Devloper</label>
          </motion.div>
          <motion.div
          initial={{left:'0%',opacity:0}}
          whileInView={{left:'16%',opacity:1}}
          transition={{duration:1,delay:0.2}}
           style={{position:'absolute',bottom:'-10%',left:'16%'}}>
              <IconEmoji iconName={BootstrapIcon} position={{height:'50px',bottom:'-10%',left:'16%'}} classes={'bootstrap'}/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
const IconEmoji = ({iconName,position,classes})=>{
  const iconStyle ={
    height:'130px'
  }
  return(
      <img src={iconName} className={classes} style={{...iconStyle,position:'absolute',...position}}  alt="" />
  )
}
export default Home
