import React from 'react'
import './Services.css'
import Card from './Card'
import { FaAppStore } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiPeakdesign } from "react-icons/si";
import { motion } from 'framer-motion'
const transition= {
  duration : 0.5,
  delay : 0.2
}

const cardData = [{
      icon : <FaAppStore/>,
      title : 'App Development',
      descr : 'Crafting innovative mobile apps tailored to you. User-friendly, seamless performance, every time.',
      url : 'https://www.upwork.com/resources/how-to-develop-an-app'
  },
  {
      icon : <CgWebsite/>,
      title : 'Web Development',
      descr : 'Crafting bespoke websites tailored to your needs. From dynamic web applications to elegant landing pages.',
      url : 'https://www.geeksforgeeks.org/web-development/'
    },
    {
      icon : <FaReact/>,
      title : 'React Development',
      descr : 'Specializing in React development to create interactive and efficient web applications.',
      url : 'https://react.dev/learn'
    },
    {
      icon : <SiPeakdesign/>,
      title : 'Web Design',
      descr : 'Transforming ideas into captivating web designs. Our innovative approach ensures a seamless user experience.',
      url : 'https://www.simplilearn.com/what-is-web-designing-article#:~:text=Web%20designing%20is%20the%20process,make%20them%20easy%20to%20navigate.'
  }
]

const Services = () => {
  return (
    <div className='services'>
      <motion.div
      initial={{y:'-50%',opacity:0}}
      whileInView={{y:'0%',opacity:1}}
      transition={transition}
       className="s_top">
        <TitleHeading title={'Services'} heading={'My Service, Which you'}/>
        <label htmlFor="">Might <span className='pink'>Like</span>.</label>
      </motion.div>
      <motion.div
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={transition}
       className="s_bottom">
        {
          cardData.map((elm)=>{
            return(
              <Card key={elm.title} icon={elm.icon} url={elm.url} title={elm.title} descr={elm.descr} btnName={elm.btnName}/>
            )
          })
        }
      </motion.div>
    </div>
  )
}
const TitleHeading = ({title,heading}) =>{
  return(
      <>
        <label htmlFor="" className='pink titleforeach'>{title}</label>
        <label htmlFor="" className='headingforeach'>{heading}</label>
      </>
  )
}
export {TitleHeading};
export default Services;