import React from 'react'
import { TitleHeading } from '../Services/Services'
import './Portfolio.css'
import Card from '../Services/Card'
import ProjectCard from './ProjectCard'
import { projectData } from '../Data/Data'
import { motion } from 'framer-motion'
const transition= {
  duration : 0.5,
  delay : 0.2
}


const Portfolio = () => {
  const projectCardData = projectData(); 
  return (
    <div className="portfolio">
      <motion.div
      initial={{y:'-50%',opacity:0}}
      whileInView={{y:'0%',opacity:1}}
      transition={transition}
       className="p_top">
        <TitleHeading title={'Portfolio'} heading={'My Creative Works'}/>
      </motion.div>
      <div
       className="p_bottom">
        {projectCardData.map((elm)=>{
          return <ProjectCard key={elm.name} name={elm.name} title={elm.title} descr={elm.descr} image={elm.image} url={elm.url}/>
        })}
      </div>
    </div>
  )
}

export default Portfolio
