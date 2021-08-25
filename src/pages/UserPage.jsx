import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Header from '../components/Header';
import CstDrawer from '../components/CstDrawer';
import PlaylistPage from './playListPage/PlaylistPage';
import CreatedPlaylistPage from './createdPlaylistPage/CreatedPlaylistPage';
// import DetailPlaylist from './playListPage/DetailPlaylist';
import SongList from './songList/SongList';
import ProfilePage from './profilePage/ProfilePage';
import { makeStyles } from '@material-ui/styles';
import Player from '../components/Player/Player';
import AccountPage from './accountPage/AccountPage';
import BrowsePage from './browsePage/BrowsePage';
const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(2),
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
  const classes = useStyles()
  let match = useRouteMatch();

  return (
    <div className={classes.root}>
      <Header/>
      <CstDrawer/>
      <div className={classes.content}>
        <Switch>
          <Route exact path={match.path} component={() => <HomePage />} />
          <Route exact path={`${match.path}/browse`} component={() => <BrowsePage/>}/>
          <Route exact path={`${match.path}/playlist`} component={() => <PlaylistPage />} />
          {/* <Route path={`${match.path}/playlist/:playlist_id`} component={() => <DetailPlaylist />} /> */}
          <Route path={`${match.path}/playlist/:playlist_id`} component={() => <SongList />} />
          <Route exact path={`${match.path}/createdPlaylist`} component={() => <CreatedPlaylistPage />} />
          <Route path={`${match.path}/createdPlaylist/:playlist_id`} component={() => <SongList />} />
          <Route exact path={`${match.path}/profile`} component={() => <ProfilePage />} />
          <Route exact path={`${match.path}/account`} component={() => <AccountPage />}/>

        </Switch>
      </div>
      <Player />
    </div>
  )
}

export default UserPage
