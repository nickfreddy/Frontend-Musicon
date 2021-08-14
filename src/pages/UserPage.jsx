import React from 'react'
import { useRouteMatch, Switch, Route} from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Header from '../components/Header';
import CstDrawer from '../components/CstDrawer';
import PlaylistPage from './playListPage/PlaylistPage';
import CreatedPlaylistPage from './createdPlaylistPage/CreatedPlaylistPage';
import DetailPlaylist from './playListPage/DetailPlaylist';
import SongList from './createdPlaylistPage/SongList';

const UserPage = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Header />
      <CstDrawer />
      <Switch>
        <Route exact path={match.path}                                    component={() => <HomePage/>}/>
        <Route exact path={`${match.path}/playlist`}                      component={() => <PlaylistPage/>}/>
        <Route       path={`${match.path}/playlist/:playlist_id`}         component={() => <DetailPlaylist/>}/>
        <Route exact path={`${match.path}/createdPlaylist`}               component={() => <CreatedPlaylistPage/>}/>
        <Route       path={`${match.path}/createdPlaylist/:playlist_id`}  component={() => <SongList/>}/>
      </Switch>
    </div>
  )
}

export default UserPage
