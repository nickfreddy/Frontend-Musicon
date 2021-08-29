import React from 'react'
import SignModal from '../components/signModal/SignModal';
import CreatePlaylistModal from '../components/createPlaylistModal/CreatePlaylistModal';
import { useDispatch } from 'react-redux';
import { openModalAuthAction } from '../redux/actions/modalAction';
import { openCreatePlaylistModalAction } from '../redux/actions/modalAction';
import { Button } from '@material-ui/core';

const TestPage = () => {
  const dispatch = useDispatch();
  const handleOpenAuthModal = () => {
    dispatch(openModalAuthAction());
  }
  const handleOpenCreatePlaylistModal = () => {
    dispatch(openCreatePlaylistModalAction())
  }

  return (
    <div>
      {/** SURYA */}
      <Button variant="contained" color="primary" onClick={handleOpenAuthModal}>Open Auth Modal</Button>
      <Button variant="contained" color="primary" onClick={handleOpenCreatePlaylistModal}>Open Create Playlist</Button>
      <SignModal />
      <CreatePlaylistModal />
    </div>
  )
}

export default TestPage
