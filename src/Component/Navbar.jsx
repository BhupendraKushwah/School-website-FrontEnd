import React, { useContext,useState } from "react";
import SidebarContext from "../Context/SidebarContext/SidebarContext";
import { IconButton, Avatar, Menu, MenuItem  } from "@mui/material";
import { red } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";



const Navbar = () => {

  const context = useContext(SidebarContext);
  const { isOpen, setIsOpen, setOpenSubmenuIndex,collapsed, setCollapsed } = context;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
    setCollapsed(!collapsed)
    setOpenSubmenuIndex(null);
  };
  return (
    <nav
      style={{
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <div
        className="nav-left"
        style={{ display: "flex", alignItems: "center" }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggle}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <h1 className="logo">School</h1>
      </div>
      <div className="nav-right">
        <IconButton
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
        color="inherit"
        >
        <Avatar sx={{ m: 1, bgcolor: red[500] }}>B</Avatar>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
