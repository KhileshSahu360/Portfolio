import React from 'react'
import KhileshResume from '../../assets/Image/KhileshResume.pdf'
import { Link } from 'react-scroll';

const Button = ({hireme,loadMore,btnName,style,component,handleClick,urls,resume}) => {
  // const hireBtn = useContext(ButtonContext)
  const pdfUrl = KhileshResume;
  function openPdfInNewTab(event) {
    event.preventDefault();
    window.open(pdfUrl, '_blank');
  }
  console.log("loadmore",loadMore)
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
        loadMore ?
        <button style={style}  className='hire_btn' onClick={handleClick}>Load More {component}</button>
        :<button style={style}  className='hire_btn' onClick={()=>handleClick(btnName,urls)}>{btnName} {component}</button>
      
    }
  </>
  )
}
export default Button
