import React from 'react';
import GeneralModal from '../commons/GeneralModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeCreatePlaylistModalAction } from '../../redux/actions/modalAction';
import { Container, makeStyles } from '@material-ui/core';
import CreatePlaylistForm from './CreatePlaylistForm';

const useStyles = makeStyles(theme => ({
  modalContent: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

  }
}))
const CreatePlaylistModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { openCreatePlaylistModal } = useSelector(state => state.modals)
  const handleClose = () => {
    dispatch(closeCreatePlaylistModalAction());
  }
  return (
    <GeneralModal isOpen={openCreatePlaylistModal} handleClose={handleClose} title="Create Playlist">
      <Container className={classes.modalContent} >
        <CreatePlaylistForm />
      </Container>
    </GeneralModal>
  )
}

export default CreatePlaylistModal
