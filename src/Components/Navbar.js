/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";

import About from "./About";
import Testimonials from "../Pages/Testimonials";
import Contact from "../Pages/Contact";
import {Link } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <About/>,
    },
    {
      text: "Testimonials",
      icon: <Testimonials />,
    },
    {
      text: "Contact",
      icon: <Contact />,
    },
  ];
  return (
    
    <nav>
    
      <div className="nav-logo-container">
      <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="">Home</Link>
        <Link to="About.js">About</Link>
        <Link to="Testimonials.js">Testimonials</Link>
        <Link to="Contact.js">Contact</Link>
        <Link to="">
          <BsCart2 className="navbar-cart-icon" />
        </Link>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
