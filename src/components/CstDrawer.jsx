import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerOpenAction } from '../redux/actions/drawerAction';
import { resetPlaylistDetailAction } from '../redux/actions/playlistDetailAction';

export const drawerWidth = "256px";
const useStyles = makeStyles(theme => ({
  root: {
    // width: theme.spacing(6),
    // height: '100vh',
    // float: 'left',
    // background: 'red',
    // //Temporary Style can be deleted
    // width: '0px',
    // overflow: 'hidden'
    // //==============================
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // transition: 'all 0.4s ease'
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerHide: {
    width: 0,
    // transition: 'all 0.4s ease'
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#1F1D2B",
    border: 'none',
    padding: theme.spacing(1)
  },
  listItem: {
    margin: theme.spacing(1, 0),
    borderRadius: theme.spacing(1)
  },
  pathSelected: {
    background: 'linear-gradient(90deg, #4399FD, #0065DA)'
  },
  mobileDrawer: {
    [theme.breakpoints.up("md")]: {
      display: 'none'
    }
  },
  pcDrawer: {
    display: 'none',
    [theme.breakpoints.up("md")]: {
      display: 'block'
    }
  }
}))

const CstDrawer = ({ className, drawer }) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();


  const handleToggleDrawer = () => {
    dispatch(toggleDrawerOpenAction());
  }

  const handleClickLikedSong = () => {
    dispatch(resetPlaylistDetailAction());
    history.push(`${url}/likedSong`)
  }


  return (
    <div className={classes.root}>
      <Drawer
        className={`${classes.drawer} ${!drawer.open && classes.drawerHide} ${classes.mobileDrawer}`}
        variant="persistent"
        open={drawer.open}
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <List>
          <ListItem button className={`${classes.listItem} ${location.pathname === url && classes.pathSelected}`} onClick={() => { history.push(`${url}`); handleToggleDrawer(); }}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button className={`${classes.listItem} ${location.pathname === url + '/browse' && classes.pathSelected}`} onClick={() => { history.push(`${url}/browse`); handleToggleDrawer() }} >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Browse" />
          </ListItem>
          <ListItem button className={`${classes.listItem} ${location.pathname === url + '/playlist' && classes.pathSelected}`} onClick={() => { history.push(`${url}/playlist`); handleToggleDrawer() }}>
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Playlist" />
          </ListItem>
          <Divider />
          <ListItem button className={`${classes.listItem} ${location.pathname === url + '/createdPlaylist' && classes.pathSelected}`} onClick={() => { history.push(`${url}/createdPlaylist`); handleToggleDrawer() }}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Created Playlist" />
          </ListItem>
          <ListItem
            button
            className={`${classes.listItem} ${location.pathname === url + '/likedSong' && classes.pathSelected}`}
            onClick={
              () => { 
                // history.push(`${url}/likedSong`); 
                handleClickLikedSong();
                handleToggleDrawer();
              }
            }>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Liked Song" />
          </ListItem>
        </List>
      </Drawer>


      {/* DRAWER FOR PC */}
      <Drawer
        className={`${classes.drawer} ${classes.pcDrawer}`}
        variant="persistent"
        open={true}
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <List>
          <ListItem button className={`${classes.listItem} ${location.pathname === url && classes.pathSelected}`} onClick={() => history.push(`${url}`)}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button className={`${classes.listItem} ${location.pathname === url + '/browse' && classes.pathSelected}`} onClick={() => history.push(`${url}/browse`)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Browse" />
          </ListItem>
          <ListItem button className={`${classes.listItem} ${location.pathname === url + '/playlist' && classes.pathSelected}`} onClick={() => history.push(`${url}/playlist`)}>
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Playlist" />
          </ListItem>
          <Divider />
          <ListItem button className={`${classes.listItem} ${location.pathname === url + '/createdPlaylist' && classes.pathSelected}`} onClick={() => history.push(`${url}/createdPlaylist`)}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Created Playlist" />
          </ListItem>
          <ListItem
            button
            className={`${classes.listItem} ${location.pathname === url + '/likedSong' && classes.pathSelected}`}
            onClick={
              // () => history.push(`${url}/likedSong`)
              handleClickLikedSong
            }>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Liked Song" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  drawer: state.drawer
})
export default connect(mapStateToProps)(CstDrawer)
