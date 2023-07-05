import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";
import logo from "../assets/logo.png";

const settings = [
  { title: "Profile", url: "/profile" },
  { title: "Login", url: "/login" },
  { title: "Logout", url: "/logout" },
];

const pages = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Agents",

    url: "/agents",
  },
  {
    title: "Pricing",

    url: "/pricing",
  },
  {
    title: "Partners",

    url: "/partners",
  },
  {
    title: "AboutUs",

    url: "/aboutUs",
  },
  {
    title: "Blog",

    url: "/blog",
  },
  {
    title: "FAQ",

    url: "/faq",
  },
  {
    title: "Support",

    url: "/support",
  },
  {
    title: "ContactUs",

    url: "/contactUs",
  },
  {
    title: "Buy Ads(*)",

    url: "/buy",
  },
];

function Navbar() {
  const [currentUser, setCurrentUser] = useState(true);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="app_bar"
      sx={{ height: "70px", backgroundColor: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            onClick={() => {
              navigate("/");
            }}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <img src={logo} alt="logo" width="50px" />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages?.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    navigate(page.url);
                  }}
                >
                  <Typography color="#rgb(239, 137, 47)" textAlign="center">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages?.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  navigate(page.url);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  color: "rgb(237, 129, 35)",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    navigate(setting.url);
                  }}
                >
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
