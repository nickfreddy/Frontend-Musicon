import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../assets/img/logo.png";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    color: "#92929D",
    background: "#1F1D2B",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    marginRight: theme.spacing(5),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  bold: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(4),
      width: "100%",
    },
  },
  searchIcon: {
    color: "#92929D",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  avatar: {
    margin: theme.spacing(2),
  },
  dropdownIcon: {
    color: "#FFFFFF",
    margin: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#1F1D2B",
    },
  },
  spacing: {
    marginRight: theme.spacing(2),
  },
  dividerSpacing: {
    margin: theme.spacing(1),
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      disableScrollLock
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      className={classes.menu}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <PersonIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Profile</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <AssignmentIndIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Account</Typography>
      </MenuItem>
      <Divider className={classes.dividerSpacing} />
      <MenuItem onClick={handleMenuClose}>
        <ExitToAppIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Logout</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      disableScrollLock
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      className={classes.menu}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Avatar className={classes.avatar} />
        <div>
          <Typography variant="subtitle1" className={classes.bold}>
            Remy Sharp
          </Typography>
          <Typography variant="body2" className={classes.spacing}>
            remysharp@gmail.com
          </Typography>
        </div>
      </MenuItem>
      <Divider className={classes.dividerSpacing} />
      <MenuItem onClick={handleMenuClose}>
        <PersonIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Profile</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <AssignmentIndIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Account</Typography>
      </MenuItem>
      <Divider className={classes.dividerSpacing} />
      <MenuItem onClick={handleMenuClose}>
        <ExitToAppIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Logout</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src={Logo} alt="logo" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              fullWidth={true}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Avatar className={classes.avatar} />
            <div>
              <Typography variant="subtitle1" className={classes.bold}>
                Remy Sharp
              </Typography>
              <Typography variant="body2">remysharp@gmail.com</Typography>
            </div>
            <div className={classes.dropdownIcon}>
              <ArrowDropDownIcon
                aria-label="show more"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              ></ArrowDropDownIcon>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Avatar />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
