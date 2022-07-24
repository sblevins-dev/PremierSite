import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Divider,
  styled,
  alpha,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import { MuiDrawer } from "./MuiDrawer";
import InputBase from "@mui/material/InputBase";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";

const useStyles = makeStyles((theme) => ({
  navBar: {
    justifyContent: "space-between",
    background: "#BBBBBB",
    color: "black",
    position: "relative",
  },
  signIn: {
    cursor: "pointer",
  },
  title: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
  },
  cartOnNav: {
    paddingLeft: "5px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.85),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(.5em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100px",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const NavTest = () => {
  const {
    cartTotal,
    cart,
    isLoginShown,
    setLoginShown,
    isRegisterShown,
    setRegisterShown,
  } = useContext(Context);
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.navBar}>
        <MuiDrawer />
        <Typography variant="h6" component="div" className={classes.title}>
          Title
        </Typography>
        <div className={classes.rightSide}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <div className={classes.signIn} onClick={setLoginShown} >Log In</div>
            <div className={classes.signIn} onClick={setRegisterShown} >Register</div>
          </Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>
          <div className={classes.cartOnNav}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon sx={{ color: "grey" }} />
              </StyledBadge>
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
