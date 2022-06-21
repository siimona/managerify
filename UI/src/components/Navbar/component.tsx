import * as React from "react";
import {
  Grid,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import HomeIcon from "@mui/icons-material/Home";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AddProduct } from "../AddProduct";
import InsertChartIcon from "@mui/icons-material/InsertChart";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const classes = useStyles();

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.smallMenu}
    >
      <MenuItem onClick={handleMenuClose}>
        <AccountCircle />
        <Link
          to={{
            pathname: `/profile`,
          }}
          className={classes.iconsMenu}
        >
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose} className={classes.logout}>
        <Link to="/logout" className={classes.iconsMenu}>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="" color="inherit">
          <Badge color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <Link to="/home">
          {" "}
          <Typography> News Feed </Typography>{" "}
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="" color="inherit">
          <Badge color="error">
            <AddBoxRoundedIcon />
          </Badge>
        </IconButton>
        <Link to="/home">
          {" "}
          <Typography> Add post </Typography>{" "}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link
          to={{
            pathname: `/profile`,
          }}
        >
          {" "}
          Profile{" "}
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.navbar}>
      <AppBar position="fixed">
        <Toolbar
          className={classes.toolBar}
          sx={{
            backgroundColor: "#ffffff",
            boxShadow:
              "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 1px 0px 0px rgb(0 0 0 / 12%)",
          }}
        >
          <Grid container item direction="row">
            <Grid item xs={2} className={classes.image}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <img
                  src={logo}
                  alt="logo"
                  height="60"
                  className={classes.logoButton}
                />
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.image}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              ></Typography>
            </Grid>
            <Grid item xs={4} className={classes.icons}>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "initial" } }}>
                <IconButton size="large">
                  <Badge color="error">
                    <Link to="/statistics" className={classes.icons}>
                      {" "}
                      <InsertChartIcon />
                    </Link>
                  </Badge>
                </IconButton>
                <IconButton size="large">
                  <Badge color="error">
                    <Link to="/home" className={classes.icons}>
                      {" "}
                      <HomeIcon />{" "}
                    </Link>
                  </Badge>
                </IconButton>
                <IconButton size="large">
                  <Badge color="error">
                    <AddProduct />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  className={classes.name}
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
