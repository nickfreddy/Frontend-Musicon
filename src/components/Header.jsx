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
import { useHistory, useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction, unsetFacebookDataUserAction, unsetGoogleDataUserAction } from "../redux/actions/userAction";
import { toggleDrawerOpenAction } from "../redux/actions/drawerAction";
import { limitString } from "../tools/stringManipulation";
import { sourceUrl } from "../redux/Api/setupAPI";
import { useGoogleLogout } from "react-google-login";
import { selectPhotoSource } from "../tools/checkPhotoSource";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#92929D",
    background: "#1F1D2B",
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    // marginRight: theme.spacing(5),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginRight: '90px'
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
    height: '2em',
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  dropdownIcon: {
    color: "#FFFFFF",
    marginLeft: theme.spacing(2),
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
    '& .MuiIconButton-root':{
      paddingRight: theme.spacing(0)
    },
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
  blueTringale:{
    width:'0',
    height: '0',
    borderTop: '50px solid #4399FD',
    borderRight: '50px solid transparent',
    borderLeft: '50px solid transparent',
    transform: 'rotate(45deg)',
    position: 'absolute',
    bottom: '-8px',
    left: '-32px',
    display: 'none',
    [theme.breakpoints.up('md')]:{
      display: 'block'
    }
    
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const {url} = useRouteMatch()
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch()
  const user = useSelector(state => state.user);

  const onLogoutSuccess = res => {
    console.log('GOOGLE USER LOGOUT SUCCESFULLY', res);
  }

  const onFailure = res => {
    console.log('GOOGLE USER FAILED TO LOGOUT')
  }

  const { signOut} = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    onLogoutSuccess,
    onFailure
  })

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

  const handleLogOutUser = () => {
    dispatch(logOutUserAction());
    dispatch(unsetFacebookDataUserAction());
    dispatch(unsetGoogleDataUserAction());
    signOut();
    if(window.FB){
      window.FB.logout();
    }
    history.push('/');
    handleMenuClose();

  }

  const routeToProfilePage = () => {
    history.push(`${url}/profile`);
    handleMenuClose();
  }

  const routeToAccountPage = () => {
    history.push(`${url}/account`)
    handleMenuClose();
  }

  const handleSearchChange = (e) => {
    // console.log(e.target.value);
    history.push(`${url}/browse?pattern=${e.target.value}`)
  }
  
  const handleToggleDrawer = () => {
    dispatch(toggleDrawerOpenAction());
  }
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
      <MenuItem onClick={routeToProfilePage}>
        <PersonIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Profile</Typography>
      </MenuItem>
      <MenuItem onClick={routeToAccountPage}>
        <AssignmentIndIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Account</Typography>
      </MenuItem>
      <Divider className={classes.dividerSpacing} />
      <MenuItem onClick={handleLogOutUser}>
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
        <Avatar className={classes.avatar} src={selectPhotoSource(user.data.photo, sourceUrl)}/>
        <div>
          <Typography variant="subtitle1" className={classes.bold}>
            {limitString(user.data.fullname, 20)}
          </Typography>
          <Typography variant="body2" className={classes.spacing}>
            {limitString(user.data.email, 21)}
          </Typography>
        </div>
      </MenuItem>
      <Divider className={classes.dividerSpacing} />
      <MenuItem onClick={routeToProfilePage}>
        <PersonIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Profile</Typography>
      </MenuItem>
      <MenuItem onClick={routeToAccountPage}>
        <AssignmentIndIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Account</Typography>
      </MenuItem>
      <Divider className={classes.dividerSpacing} />
      <MenuItem onClick={handleLogOutUser}>
        <ExitToAppIcon className={classes.spacing} />
        <Typography className={classes.spacing}>Logout</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <div className={classes.blueTringale}></div>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open-drawer"
            onClick={handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <img src={Logo} alt="logo" />
          </div>
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
              onChange={handleSearchChange}
              fullWidth={true}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <Avatar className={classes.avatar} src={selectPhotoSource(user.data.photo, sourceUrl)}/>
            <div>
              <Typography variant="subtitle1" className={classes.bold}>
                {limitString(user.data.fullname, 17)}
              </Typography>
              <Typography variant="body2">{limitString(user.data.email, 21)}</Typography>
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
              <Avatar src={selectPhotoSource(user.data.photo, sourceUrl)}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
