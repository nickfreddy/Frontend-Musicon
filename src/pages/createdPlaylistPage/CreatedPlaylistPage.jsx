import {
  Container,
  // Button, 
  Typography,
  makeStyles,
  Button,
  // Paper
} from '@material-ui/core'
import React, { useState } from 'react'
import { dummyCreatedPlaylist } from '../../assets/example-response/dummyDataCreatedPlaylist';
import CreatedPlaylistTable from './CreatedPlaylistComponent/CreatedPlaylistTable';
import CreatedPlaylistList from './CreatedPlaylistComponent/CreatedPlaylistList';
import addIcon from '../../assets/img/carbon_add.svg'
import { useDispatch } from 'react-redux';
import { openCreatePlaylistModalAction } from '../../redux/actions/modalAction'
import CreatePlaylistModal from '../../components/createPlaylistModal/CreatePlaylistModal';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
// import { useHistory, useRouteMatch } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  root: {},
  sectionTitle: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  },
  buttonContainer: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    '& > .MuiButton-root': {
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up('md')]: {
        marginRight: 0
      }
    }
  },
  listHeader: {

  }

}))
const CreatedPlaylistPage = () => {
  // const history = useHistory();
  // const {url} = useRouteMatch();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    open: false,
    idToDelete: ''
  })
  const handleDelete = (_id) => {
    setDeleteConfirmation(state => ({
      ...state,
      open: true,
      idToDelete: _id
    }))
  }

  // ACTION FOR DELETE CONFIRMATION =======================
  const actionTrueDeleteConfirmation = (_id) => {
    alert(`This id ${_id} playList will be deleted`)
  }
  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmation(state => ({
      ...state,
      open: false,
      idToDelete: ''
    }))
  }
  //========================================================

  const handleSongPlay = (_id) => {
    console.log(`This playList with id ${_id} will be played`)
  }

  const handleOpenCreatePlaylistModal = () => {
    dispatch(openCreatePlaylistModalAction())
  }
  return (
    <Container>
      <Typography className={classes.sectionTitle} variant="h5">Created Playlist</Typography>
      {/* <Button variant="contained" color="primary" onClick={() => history.push(`${url}/123`)}>Goto Song List</Button> */}
      <div className={classes.buttonContainer}>
        <Button onClick={handleOpenCreatePlaylistModal} startIcon={<img src={addIcon} alt="..." />} variant="contained" color="primary">Create Playlist</Button>
      </div>
      <CreatedPlaylistTable data={dummyCreatedPlaylist} handleSongPlay={handleSongPlay} handleDelete={handleDelete} handleOpenCreatePlaylistModal={handleOpenCreatePlaylistModal} />
      <CreatedPlaylistList data={dummyCreatedPlaylist} handleSongPlay={handleSongPlay} handleDelete={handleDelete} handleOpenCreatePlaylistModal={handleOpenCreatePlaylistModal} />
      <CreatePlaylistModal />
      <ConfirmationDialog
        open={deleteConfirmation.open}
        title="DeletePlaylist"
        mainText="Are you sure want to delete this Playlist ?"
        secondaryText="Note: After deletion, the action cannot be undoned"
        actionTrue={() => actionTrueDeleteConfirmation(deleteConfirmation.idToDelete)}
        handleClose={handleCloseDeleteConfirmation}
        buttonOk="Delete"
        buttonVariant="danger"
      />
    </Container>
  )
}

export default CreatedPlaylistPage
