import React from 'react';
import GeneralModal from '../commons/GeneralModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeCreatePlaylistModalAction } from '../../redux/actions/modalAction';
import { Container } from '@material-ui/core';
import CreatePlaylistForm from './CreatePlaylistForm';
const CreatePlaylistModal = () => {
  const dispatch = useDispatch()
  const { openCreatePlaylistModal } = useSelector(state => state.modals)
  const handleClose = () => {
    dispatch(closeCreatePlaylistModalAction());
  }
  return (
    <GeneralModal isOpen={openCreatePlaylistModal} handleClose={handleClose} title="Create Playlist">
      <Container>
        <CreatePlaylistForm />
      </Container>
    </GeneralModal>
  )
}

export default CreatePlaylistModal
