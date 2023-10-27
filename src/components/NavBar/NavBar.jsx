import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { ShoppingCart } from "@mui/icons-material";
import { useState, useEffect } from "react";
import OrderDetail from "../OrderDetail/OrderDetail";
import * as ordersAPI from "../../utilities/orders-api";
import { Badge, Box } from "@mui/material";
import logo from '../../Assets/Images/logo.png'

export default function TemporaryDrawer({ user, setUser, handleToggle }) {
  const [cart, setCart] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false);

  useEffect(
    function () {
      (async function () {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      })();
    },
    []
  );
 
  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  const orderId = cart ? cart._id : null;
  async function handleCheckout(orderId) {
    try {
      const response = await ordersAPI.checkout(orderId);
      console.log(response.sessionUrl);
      window.location.href = response.sessionUrl;
    } catch (error) {
      console.error(error);
    }
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>Welcome, {user.name}</ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>,
          <ListItemButton component={Link} to="/products">
            <ListItemText primary=" Catalogue" />
          </ListItemButton>,
          <ListItemButton component={Link} to="" onClick={handleLogOut}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>,
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              position: "fixed",
              top: "10px",
              left: anchor === "left" ? "10px" : "unset",
              right: anchor === "left" ? "unset" : "10px", // Opposite side
              color: "silver",
              zIndex: "999",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
                    {/* <img
                        className="head"
                        src={logo}
                        alt="Your Company"
                    /> */}
          <Button
            style={{
              position: "fixed",
              top: "10px",
              right: anchor === "left" ? "10px" : "unset",
              color: "silver",
              zIndex: "999",
            }}
            onClick={() => {
              // Toggle the visibility of the OrderDetail component
              setShowOrderDetail(!showOrderDetail);
            }}
          >
            <Badge badgeContent={cart ? cart.totalQty : 0} color="primary">
              <ShoppingCart />
            </Badge>
          </Button>
          {showOrderDetail && cart !== null && (
            <OrderDetail
              order={cart}
              handleChangeQty={handleChangeQty}
              handleCheckout={handleCheckout}
            />
          )}
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
