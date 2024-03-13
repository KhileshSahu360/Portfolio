import React from 'react'
import './Button.css'
import { FaDownload } from "react-icons/fa";

const ColorButton = ({btnName}) => {
  return (
    <button className='hire_btn'>{btnName}</button>
  )
}
const WaterButton =({btnName}) =>{
  return(
    <button className='download_btn'>{btnName}<FaDownload /></button>
  )
}
export default ColorButton
export{WaterButton}
