import { Container, makeStyles, IconButton } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react';
import navLogo from '../../assets/img/Logo.svg';
import { RoundedButton } from '../../components/commons/CstButton';
import MenuIcon from '@material-ui/icons/Menu';
import MobileMenu from './navBarComponent/MobileMenu';
// import SignModal from '../../components/signModal/SignModal';
// import { useDispatch } from 'react-redux';
// import { openModalAuthAction } from '../../redux/actions/modalAction';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    zIndex: 2,
    transition: 'all 0.5s ease',
    background: 'hsla(212, 100%, 43%, 0)',
    // boxShadow: '0 1px 6px black'

  },
  scrolledNavbar: {
    background: 'hsla(212, 100%, 43%, 1)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(1)
  },
  navLinks: {
    marginBottom: theme.spacing(1),
    '& .MuiButton-root': {
      textTransform: 'none',
      fontSize: '1.2em',
    },
    '& .MuiButton-root:last-child': {
      minWidth: '150px',
      marginLeft: theme.spacing(4)
    },
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  mobileMenuButton: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

const NavBar = ({ handleOpenAuthModal }) => {
  const menuButtonEl = useRef(null)
  const [open, setOpen] = React.useState(false);
  const [y, setY] = useState(window.scrollY);
  const classes = useStyles();
  // const dispatch = useDispatch();

  // const handleOpenAuthModal = () => {
  //   dispatch(openModalAuthAction());
  // }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (menuButtonEl.current && menuButtonEl.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      menuButtonEl.current.focus();
    }

    prevOpen.current = open;
  }, [open]);




  useEffect(() => {
    const handleSetScroll = (e) => setY(e.currentTarget.scrollY);
    window.addEventListener("scroll", handleSetScroll);
    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", handleSetScroll);
    };
  }, [y]);

  return (
    <div className={`${classes.root} ${y > 30 && classes.scrolledNavbar}`}>
      <Container className={classes.navContainer}>
        <div className={classes.navImage}>
          <img src={navLogo} alt="..." />
        </div>
        <div className={classes.navLinks}>
          <RoundedButton href="#home" variant="link">Home</RoundedButton>
          <RoundedButton href="#about" variant="link">About</RoundedButton>
          <RoundedButton onClick={handleOpenAuthModal} variant="gold">Login</RoundedButton>
        </div>
        <IconButton
          ref={menuButtonEl}
          className={classes.mobileMenuButton}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
        <MobileMenu
          anchorRef={menuButtonEl}
          open={open}
          handleListKeyDown={handleListKeyDown}
          handleClose={handleClose}
          actions={{
            handleOpenAuthModal
          }}
        />
      </Container>
      {/* <SignModal /> */}
    </div>
  )
}

export default NavBar
