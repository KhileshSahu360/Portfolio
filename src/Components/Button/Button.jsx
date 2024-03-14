import React from 'react'
import './Button.css'

const Button = ({btnName,style,component,handleClick}) => {
  // const hireBtn = useContext(ButtonContext)
  return (
    <button style={style} className='hire_btn' onClick={()=>handleClick(btnName)}>{btnName} {component}</button>
  )
}
export default Button
