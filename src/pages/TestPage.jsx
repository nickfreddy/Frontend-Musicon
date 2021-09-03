import React, { useState } from 'react'
import SignModal from '../components/signModal/SignModal';
import CreatePlaylistModal from '../components/createPlaylistModal/CreatePlaylistModal';
import { useDispatch } from 'react-redux';
import { openModalAuthAction } from '../redux/actions/modalAction';
import { openCreatePlaylistModalAction } from '../redux/actions/modalAction';
import { Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const TestPage = () => {
  const [openSnack, setOpenSnack] = useState(false);
  const dispatch = useDispatch();
  const handleOpenAuthModal = () => {
    dispatch(openModalAuthAction());
  }
  const handleOpenCreatePlaylistModal = () => {
    dispatch(openCreatePlaylistModalAction())
  }

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpenSnack(false)
  }

  const handleOpenSnack = () => {
    setOpenSnack(true)
  }
  return (
    <div>
      {/** SURYA */}
      <Button variant="contained" color="primary" onClick={handleOpenAuthModal}>Open Auth Modal</Button>
      <Button variant="contained" color="primary" onClick={handleOpenCreatePlaylistModal}>Open Create Playlist</Button>
      <Button variant="contained" color="secondary" onClick={handleOpenSnack}>Open Snack</Button>

      <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <SignModal />
      <CreatePlaylistModal />
    </div>
  )
}

export default TestPage
