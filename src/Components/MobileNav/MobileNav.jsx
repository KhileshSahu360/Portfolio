import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-scroll';
import './MobileNav.css';
import { MdHome } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { IoLayers } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { BiSolidMessageRoundedDots } from "react-icons/bi";


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [selected,setSelected] = React.useState('Home');
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ul>
        {/* {['Home', 'About', 'Services', 'Portfolio','Skills','Contact'].map((text, index) => ( */}
          <ListItem disablePadding >
            <ListItemButton sx={{textAlign:'center'}}>
                <LiItem to={'Home'} text={'Home'} setSelected={setSelected} selected={selected} toggleclick={toggleDrawer(false)} iconComponent={<MdHome />}/>    
            </ListItemButton>
            </ListItem>

          <ListItem disablePadding >
            <ListItemButton sx={{textAlign:'center'}}>
                <LiItem to={'About'} text={'About'} setSelected={setSelected} selected={selected} toggleclick={toggleDrawer(false)} iconComponent={<FaUserTie />}/>    
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding >
            <ListItemButton sx={{textAlign:'center'}}>
                <LiItem to={'Services'} text={'Services'} setSelected={setSelected} selected={selected} toggleclick={toggleDrawer(false)} iconComponent={<MdOutlineWeb />}/>      
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton sx={{textAlign:'center'}}>
                <LiItem to={'Portfolio'} text={'Portfolio'} setSelected={setSelected} selected={selected} toggleclick={toggleDrawer(false)} iconComponent={<AiFillProject />}/>    
            
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton sx={{textAlign:'center'}}>
                <LiItem to={'Skills'} text={'Skills'} setSelected={setSelected} selected={selected} toggleclick={toggleDrawer(false)} iconComponent={<IoLayers />}/>    
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton sx={{textAlign:'center'}}>
                <LiItem to={'Contact'} text={'Contact'} setSelected={setSelected} selected={selected} toggleclick={toggleDrawer(false)} iconComponent={<MdOutlineContactPhone />}/>    
            </ListItemButton>
          </ListItem>
      
        {/* ))} */}
        </ul>
        <div className="lets_chat" style={{display:'block'}}>
          <button style={{textAlign:'center'}}>Let's Chat<BiSolidMessageRoundedDots className='msg_icon'/></button>
      </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><TiThMenu fontSize={'2rem'}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

const LiItem = ({setSelected,to,text,toggleclick,iconComponent,selected}) =>{
  const handleClick = (setSelected,text) =>{
    setSelected(text);
    toggleclick();
  }
  return (
      <Link to={text} smooth={true} duration={500} style={{textAlign:'center',color:selected===text? '#e6027d':'#08203a'}} onClick={()=>handleClick(setSelected,text)}>{iconComponent}{text}</Link>
  ) 
}
