import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { RoundedButton } from '../../../components/commons/CstButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuContainer:{
    width: '97.5vw',
    background: '#4399FD',
    [theme.breakpoints.up("sm")]:{
      width: '40vw'
    }
  },
}));


const MobileMenu = ({open, anchorRef, handleListKeyDown, handleClose}) => {
  const classes = useStyles();
  return (
    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper className={classes.menuContainer}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                <MenuItem onClick={handleClose}><RoundedButton fullWidth variant="link">Home</RoundedButton></MenuItem>
                <MenuItem onClick={handleClose}><RoundedButton fullWidth variant="link">About</RoundedButton></MenuItem>
                <MenuItem onClick={handleClose}><RoundedButton fullWidth variant="gold">Login</RoundedButton></MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}

export default MobileMenu
