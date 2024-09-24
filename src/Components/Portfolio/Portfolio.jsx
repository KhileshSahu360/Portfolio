import React, { useState } from 'react'
import { TitleHeading } from '../Services/Services'
import './Portfolio.css'
import ProjectCard from './ProjectCard'
import { projectData } from '../Data/Data'
import { motion } from 'framer-motion'
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { useData } from '../Data/Data'
import Button  from '../Button/Button'
import CustomizedSnackbars from './Alert'
const transition= {
  duration : 0.5,
  delay : 0.2
}


const Portfolio = () => {
  const projectCardData = projectData(); 
  const [count, setCount] = useState(4);
  const [open, setOpen] = useState(false);
  const { data } = useData();
  
  const handleClick = () => {
    if(count >= projectCardData.length) setOpen(true)
    
    setCount((prev)=> prev + 4)
  }
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
        {projectCardData.slice(0,count).map((elm)=>{
          return <ProjectCard key={elm.name} name={elm.name} title={elm.title} descr={elm.descr} image={elm.image} url={elm.url}/>
        })}
      </div>
      <div className='p_button load_more_btn'>
          <Button btnName={"Load More"} loadMore={true} handleClick={handleClick}  style={{...data.waterBtn,padding:'.5rem 1rem',marginTop:'.6rem',display:'flex',alignItems:'center',gap:'.1rem'}} component={<RiArrowDownDoubleLine />} />
      </div>
      <CustomizedSnackbars text={'No More Project!'} open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Portfolio
