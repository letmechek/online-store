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
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';import { useState, useEffect } from "react";
import OrderDetail from "../OrderDetail/OrderDetail";
import * as ordersAPI from "../../utilities/orders-api";
import { Badge, Box } from "@mui/material";

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

  const [state, setState] = useState({
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
    <>
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              position: "fixed",
              top: "10px",
              left: anchor === "left" ? "10px" : "unset",
              right: anchor === "left" ? "unset" : "10px",
              color: "#8B857D",
              zIndex: "999",
              fontSize: "100px"
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon sx={{ fontSize: 30 }}/>
          </Button>
          <Button
            style={{
              position: "fixed",
              top: "10px",
              right: anchor === "left" ? "10px" : "unset",
              color: "#8B857D",
              zIndex: "999",
            }}
            onClick={() => {
              setShowOrderDetail(!showOrderDetail);
            }}
          >
            <Badge badgeContent={cart ? cart.totalQty : 0} color="primary">
              <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/>
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
    </>
  );
}
