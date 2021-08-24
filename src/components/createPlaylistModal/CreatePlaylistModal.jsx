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
const CreatePlaylistModal = ({photo = "", title ="", description= "", actionUpdate=false, playlistId}) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { openCreatePlaylistModal, createPlaylistModalAction } = useSelector(state => state.modals)
  const handleClose = () => {
    dispatch(closeCreatePlaylistModalAction());
  }
  return (
    <GeneralModal isOpen={openCreatePlaylistModal} handleClose={handleClose} title="Create Playlist">
      <Container className={classes.modalContent} >
        <CreatePlaylistForm createPlaylistModalAction={createPlaylistModalAction} photo={photo} title={title} description={description} actionUpdate={actionUpdate} playlistId={playlistId}/>
      </Container>
    </GeneralModal>
  )
}

export default CreatePlaylistModal
