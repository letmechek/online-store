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
import * as userService from '../../utilities/users-service'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer({user, setUser}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  function handleLogOut() {
            userService.logOut()
            setUser(null)
        }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <ListItem disablePadding>
        <ListItemButton>
        Welcome, {user.name}
        </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          <Link to="/"><HomeIcon/></Link>, 
          <Link to="/products">Catalogue</Link>, 
          <Link to="" onClick={handleLogOut}><LogoutIcon/></Link>
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              {item}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
         <Button style={{
          position:"absolute", 
          top:"10px", left:"10px",
           color: 'silver',
            zIndex: '999'
            }} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon/></Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}




