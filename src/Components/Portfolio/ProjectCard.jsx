import React, { useState } from 'react'
import Button  from '../Button/Button'
import { useData } from '../Data/Data'
import { GiArmoredBoomerang } from 'react-icons/gi'
import CustomizedSnackbars from './Alert'
import {motion} from 'framer-motion'


const transition= {
  duration : 0.5,
  delay : 0.2
}

const ProjectCard = (props) => {
  const {data} = useData();
  const [open, setOpen] = React.useState(false);
  const handleClick = (url) => {
    if(url===''){
        setOpen(true);
        console.log('clicking....');
      }else{
        window.open(url,'_blank')
      }
  }
  return (
    <>
    <div

     className='project_card'>
        <div className="PC_left">
          <div className='name'>
              <label htmlFor="">{props.name}</label>
          </div>
          <div className='p_title'>
            <label htmlFor="">{props.title}</label>
          </div>
          <div className='p_descr'>
            <span>{props.descr}</span>
          </div>
          <div className='p_button'>
            <Button btnName={"Live Demo"}  handleClick={()=>handleClick(props.url)} urls={props.url} style={{...data.waterBtn,padding:'.5rem .6rem',marginTop:'.6rem'}} component={<GiArmoredBoomerang />} />
          </div>
        </div>
        <div className="PC_right">
          <img src={props.image} alt="" style={{height:'260px',width:'200px',borderRadius:'10px'}} />
        </div>
        <CustomizedSnackbars open={open} setOpen={setOpen}/>

    </div>
    </>
  )
}

export default ProjectCard
