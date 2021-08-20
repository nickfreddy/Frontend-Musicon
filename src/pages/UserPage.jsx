import React, { useState } from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Header from '../components/Header';
import CstDrawer from '../components/CstDrawer';
import PlaylistPage from './playListPage/PlaylistPage';
import CreatedPlaylistPage from './createdPlaylistPage/CreatedPlaylistPage';
import DetailPlaylist from './playListPage/DetailPlaylist';
import SongList from './songList/SongList';
import ProfilePage from './profilePage/ProfilePage';
import { makeStyles } from '@material-ui/styles';
import Player from '../components/Player/Player';
import AccountPage from './accountPage/AccountPage';
const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      position: 'relative'
    },
    // marginLeft: -drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: "80px"//"120px" //space to the top spare to header
  }
}))
const UserPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles()
  let match = useRouteMatch();
  const handleToggleDrawerOpen = () => {
    setDrawerOpen(state => !state)
  }
  return (
    <div className={classes.root}>
      <Header handleToggleDrawerOpen={handleToggleDrawerOpen} />
      <CstDrawer open={drawerOpen} />
      <div className={classes.content}>
        <Switch>
          <Route exact path={match.path} component={() => <HomePage />} />
          <Route exact path={`${match.path}/playlist`} component={() => <PlaylistPage />} />
          <Route path={`${match.path}/playlist/:playlist_id`} component={() => <DetailPlaylist />} />
          <Route exact path={`${match.path}/createdPlaylist`} component={() => <CreatedPlaylistPage />} />
          <Route path={`${match.path}/createdPlaylist/:playlist_id`} component={() => <SongList />} />
          <Route exact path={`${match.path}/profile`} component={() => <ProfilePage drawerOpen={drawerOpen} />} />
          <Route exact path={`${match.path}/account`} component={() => <AccountPage />}/>
        </Switch>
      </div>
      <Player />
    </div>
  )
}

export default UserPage
