import React from 'react'
import './Button.css'
import KhileshResume from '../../assets/Image/KhileshResume.pdf'
import { Link } from 'react-scroll';

const Button = ({hireme,btnName,style,component,handleClick,urls,resume}) => {
  // const hireBtn = useContext(ButtonContext)
  const pdfUrl = KhileshResume;
  function openPdfInNewTab(event) {
    event.preventDefault();
    window.open(pdfUrl, '_blank');
  }
  return (
    <>
      {resume ?
        
          <button style={style}  className='hire_btn' onClick={()=>handleClick(btnName,urls)}><a  onClick={openPdfInNewTab} style={{color:'#08203a',textDecoration:'none'}}>{btnName} {component}</a> </button>
      
      : hireme?
      
        <button style={style}  className='hire_btn'>
          <Link to='Contact' smooth={true} duration={500} style={{color:'white'}}>
            {btnName} {component}
          </Link>
        </button>:
        <button style={style}  className='hire_btn' onClick={()=>handleClick(btnName,urls)}>{btnName} {component}</button>
      
    }
  </>
  )
}
export default Button
