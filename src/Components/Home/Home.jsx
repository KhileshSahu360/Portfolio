import React from 'react'
import './Home.css'
import ColorButton from '../Button/Button'
import { WaterButton } from '../Button/Button'
import Avatar from '../../assets/Image/Avatar.png'
import GlassyEmoji from '../../assets/Icon/GlassyEmoji.png'
import ReactIcon from '../../assets/Icon/React.svg'
import BootstrapIcon from '../../assets/Icon/BootstrapIcon.svg'

const Home = () => {
  
  return (
    <div className='home'>
      <div className="first">
        <label htmlFor="">KHILESH</label><br />
        <label htmlFor="" className='sahu'>SAHU</label>
      </div>
      <div className="second">
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
            <ColorButton btnName={'Hire Me'}/>
            <WaterButton btnName={'Download CV'}/>
          </div>

      </div>
      <div className="third">
        <div className="img_div">
          <img src={Avatar} alt="" style={{height:'auto',width:'300px',zIndex:'100'}}/>
        </div>
        <div className="icon">
          <IconEmoji iconName={GlassyEmoji} position={{top:'-10%',left:'-1%'}} classes={'glassy_emoji'}/>
          <div className="react_cont">
            <IconEmoji iconName={ReactIcon} position={{height:'50px',position:'relative',top:'8.5%',left:'9%'}}/>
            <label htmlFor="">React <br />Devloper</label>
          </div>
          <IconEmoji iconName={BootstrapIcon} position={{height:'80px',bottom:'-10%',left:'16%'}} classes={'bootstrap'}/>
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
