import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BootstrapIcon from '../../assets/Icon/BootstrapIcon.svg'
import MongoDB from '../../assets/Icon/MongoDB.svg'
import ReactIcon from '../../assets/Icon/React.svg'
import Node from '../../assets/Icon/Node.svg'
import Express from '../../assets/Icon/Express.svg'
import PHP from '../../assets/Icon/PHP.svg'
import HTML from '../../assets/Icon/HTML.svg'
import CSS from '../../assets/Icon/CSS.svg'
import Tailwind from '../../assets/Icon/Tailwind.svg'
import Next from '../../assets/Icon/Next.svg'


export default function AccordionExpandDefault(props) {
  return (
    <div>
      <Accordion defaultExpanded={false} className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='title_field'>
            <ImageIcon iconName={props.icon}/>
            <label htmlFor="" className='title'>{props.title}</label>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.descr}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
const ImageIcon = ({iconName}) =>{
  return <img src={iconName} alt="" style={{height:'2rem',width:'2rem'}}/>
}