import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // color: "white",
        backgroundColor:  (theme) => theme.palette.grey[100]
      }}
    >
      <CssBaseline />
      <Container
        component="footer"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          justifyContent: "space-around",
        }}
        maxWidth="lg"
      >
        <Box sx={{ flexBasis: "25%" }}>
          <Typography variant="h6">Company</Typography>
          <Typography variant="body2">About</Typography>
          <Typography variant="body2">Careers</Typography>
          <Typography variant="body2">Press</Typography>
          <Typography variant="body2">Blog</Typography>
        </Box>

        <Box sx={{ flexBasis: "25%" }}>
          <Typography variant="h6">Help</Typography>
          <Typography variant="body2">FAQ</Typography>
          <Typography variant="body2">Contact Us</Typography>
          <Typography variant="body2">Shipping & Returns</Typography>
          <Typography variant="body2">Terms & Conditions</Typography>
        </Box>
        <Box sx={{ flexBasis: "25%" }}>
          <Typography variant="h6">Account</Typography>
          <Typography variant="body2">Sign In</Typography>
          <Typography variant="body2">Create Account</Typography>
          <Typography variant="body2">Order History</Typography>
          <Typography variant="body2">Wishlist</Typography>
        </Box>
        <Box sx={{ flexBasis: "25%" }}>
          <Typography variant="h6">Social</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              
            }}
          >
            <IconButton>
              <FacebookIcon color='primary' />
            </IconButton>
            <IconButton>
              <TwitterIcon color='primary'/>
            </IconButton>
            <IconButton>
              <InstagramIcon color='primary'/>
            </IconButton>
            <IconButton>
              <PinterestIcon color='primary'/>
            </IconButton>
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">Subscribe to our newsletter</Typography>
            <TextField
              id="newsletter"
              label="Enter email"
              variant="outlined"
              sx={{ mt: 2 , backgroundColor: grey[100], borderRadius: '15px'}}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          px: 2,
          textAlign: "center",
          backgroundColor: (theme) => theme.palette.grey[400],
          color: theme.palette.common.white,
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            Copyright &copy; {new Date().getFullYear()} Sams StreetWear
          </Typography>
          <Typography variant="body2">All rights reserved</Typography>
        </Container>
      </Box>
    </Box>
  );
}
