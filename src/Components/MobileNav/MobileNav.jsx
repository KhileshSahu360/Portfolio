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


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const listArr = [];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ul>
        {['Home', 'About', 'Services', 'Portfolio','Skills','Contact'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton sx={{textAlign:'center'}} onClick={toggleDrawer(false)}>
              
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <LiItem to={text} text={text}/>
             
              {/* <ListItemText primary={text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
        </ul>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><TiThMenu /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
const LiItem = ({to,text}) =>{
  return (
      <Link to='contact' smooth={true} duration={500} style={{textAlign:'center'}}>{text}</Link>
  )
}
