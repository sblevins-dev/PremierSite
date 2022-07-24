import { Drawer, Box, Typography, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const backStyle = {
    position: "absolute",
    top: "-40px",
    right: "10px",
    cursor: "pointer"
  }

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width={{ xs: '150px', md: '200px' }}
          textAlign="center"
          role="presentation"
          margin="50px 0 0 0"
          position="relative"
        >
          <KeyboardBackspaceIcon style={backStyle} onClick={() => setIsDrawerOpen(false)} />
          <Typography variant="h6" component="div">
            <Stack spacing={2}>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <Link to="/products" style={linkStyle}>
                Products
              </Link>
              <Link to="/cart" style={linkStyle}>
                Cart
              </Link>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
              {/* <li className="side-menu-login-btn" onClick={handleLoginClick}>
            Sign In
          </li> */}
            </Stack>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
