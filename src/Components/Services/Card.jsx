import React, { useState } from 'react'
import './Services.css'
import Button from '../Button/Button';
import { useData } from '../Data/Data';
import { GiArmoredBoomerang } from "react-icons/gi";
import { FaAppStore } from "react-icons/fa";

const Card = (props) => {
  const {data} = useData();
  const handleClick = (btnName,url) => {
    window.open(url,'_blank')
  }
  return (
    <>
    <div className='card'>
      <div className='icon'>
          <label htmlFor="">{props.icon}</label>
      </div>
      <div className='title'>
        <label htmlFor="">{props.title}</label>
      </div>
      <div className='descr'>
        <span>{props.descr}</span>
      </div>
      <div className='button'>
        <Button btnName={"Read More"}  handleClick={handleClick} urls={props.url} style={{...data.waterBtn,padding:'.5rem .6rem',marginTop:'.6rem'}} component={<GiArmoredBoomerang />} />
      </div>
    </div>
    </>
  )
}
const Icon = ({component}) =>{
  return(
    <label htmlFor=""><FaAppStore fontSize={"1.6rem"} color='#919191'/></label>
  )
}

export default Card
