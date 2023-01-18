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
          <Link to="/">Home</Link>, 
          <Link to="/products/new">Catalogue</Link>, 
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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








// import { Link } from 'react-router-dom'
// import * as userService from '../../utilities/users-service'
// import React, { useState } from "react"
// import './NavBar.css'


// export default function NavBar({ user, setUser }) {
//     const [navbarOpen, setNavbarOpen] = useState(false)
//     function handleLogOut() {
//         userService.logOut()
//         setUser(null)
//     }
//     const handleToggle = () => {
//         setNavbarOpen(!navbarOpen)
//       }

//     return (
//         <nav className="navBar" >
//         <button className="sandwichbtn" onClick={handleToggle}><i class="gg-format-justify"></i></button>
//         <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> <nav>
//         Welcome, {user.name}
//         <Link to="/">Home</Link>
        
//         <Link to="/products/new">Catalogue</Link>
        
//         {/* <Link to="/orders">Order History</Link> */}
        
        
//         <Link to="" onClick={handleLogOut}>Log Out</Link>
//     </nav></ul>
//       </nav>
//         )
//     }
   