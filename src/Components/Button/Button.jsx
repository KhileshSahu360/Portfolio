import React from 'react'
import './Button.css'

const Button = ({btnName,style,component,handleClick,urls}) => {
  // const hireBtn = useContext(ButtonContext)
  return (
    <button style={style}  className='hire_btn' onClick={()=>handleClick(btnName,urls)}>{btnName} {component}</button>
  )
}
export default Button
