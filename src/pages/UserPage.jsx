import React from 'react';
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
import ArtistPage from './artistPage/ArtistPage';
import ArtistAlbumDetail from './artistPage/artistAlbumDetail/ArtistAlbumDetail';
import LikedSong from './likedSong/LikedSong';
// import { AUTH_SPOTIFY_URL } from '../redux/Api/spotifyAPI';
// import useAuthSpotify from '../components/customHook/useAuthSpotify';

// const code = new URLSearchParams(window.location.search).get('code');


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
    paddingTop: "80px",//"120px" //space to the top spare to header
    paddingBottom: "210px",
    [theme.breakpoints.up('sm')]: {
      paddingBottom: "160px"
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: "100px"
    },
  }
}))



const UserPage = () => {
  // const accessToken = useAuthSpotify(code);
  const classes = useStyles()
  let match = useRouteMatch();


  const routes = [
    { exact: true, path: match.path, component: () => <HomePage /> },
    { exact: true, path: `${match.path}/browse`, component: () => <BrowsePage /> },
    { exact: false, path: `${match.path}/browse/artist/:artist_id`, component: () => <ArtistPage /> },
    { exact: false, path: `${match.path}/browse/album/:album_id`, component: () => <ArtistAlbumDetail /> },
    { exact: true, path: `${match.path}/playlist`, component: () => <PlaylistPage /> },
    { exact: false, path: `${match.path}/playlist/:playlist_id`, component: () => <SongList /> },
    { exact: true, path: `${match.path}/createdPlaylist`, component: () => <CreatedPlaylistPage /> },
    { exact: false, path: `${match.path}/createdPlaylist/:playlist_id`, component: () => <SongList /> },
    { exact: true, path: `${match.path}/profile`, component: () => <ProfilePage /> },
    { exact: true, path: `${match.path}/account`, component: () => <AccountPage /> },
    { exact: true, path: `${match.path}/likedSong`, component: () => <LikedSong /> },
  ]

  return (
    <div className={classes.root}>
      <Header />
      <CstDrawer />
      <div className={classes.content}>
        <Switch>

          {routes.map((route, index) => <Route key={index} {...route} />)}

          {/* <Route exact path={match.path} component={() => <HomePage />} />
          <Route exact path={`${match.path}/browse`} component={() => <BrowsePage />} />
          <Route path={`${match.path}/browse/artist/:artist_id`} component={() => <ArtistPage />} />
          <Route path={`${match.path}/browse/album/:album_id`} component={() => <ArtistAlbumDetail />} />
          <Route exact path={`${match.path}/playlist`} component={() => <PlaylistPage />} />
          <Route path={`${match.path}/playlist/:playlist_id`} component={() => <SongList />} />
          <Route exact path={`${match.path}/createdPlaylist`} component={() => <CreatedPlaylistPage />} />
          <Route path={`${match.path}/createdPlaylist/:playlist_id`} component={() => <SongList />} />
          <Route exact path={`${match.path}/profile`} component={() => <ProfilePage />} />
          <Route exact path={`${match.path}/account`} component={() => <AccountPage />} />
          <Route exact path={`${match.path}/likedSong`} component={() => <LikedSong />} /> */}

          {/* <Route path={`${match.path}/playlist/:playlist_id`} component={() => <DetailPlaylist />} /> */}
        </Switch>
      </div>
      <Player />
    </div>
  )
}

export default UserPage
