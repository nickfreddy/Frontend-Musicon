import { Button, Container, CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//DUMMY RESPONSE DATA GET PLAYLIST DETAIL BY ID -contain song
import dummyRsponse from '../../assets/example-response/get-playlist-by-id.json'
import PlaylistHeader from './SongListComponent/PlaylistHeader';
import SongListTable from './SongListComponent/SongListTable';
import SongListList from './SongListComponent/SongListList';
import { makeStyles } from '@material-ui/core';
import plusIcon from '../../assets/img/carbon_add.svg'
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import AddSongSearcBar from './SongListComponent/AddSongSearcBar';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylistDetailAction, resetPlaylistDetailAction } from '../../redux/actions/playlistDetailAction';

const responseData = dummyRsponse.data
console.log(responseData);

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    textAlign: 'right',
    margin: theme.spacing(2, 0)
  },
  buttonAddSonng: {
    fontWeight: 700,
    textTransform: 'none',
  },
  pleaseWait: {
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))


const SongList = () => {
  const { playlist_id } = useParams() // its used to getting response from API
  const classes = useStyles();
  const dispatch = useDispatch();
  const playlistDetail = useSelector(state => state.playlistDetail);
  const playlistDetailData = playlistDetail.data;



  const [deleteSongConfirmation, setDeleteSongConfirmation] = useState({
    open: false,
    idToDelete: ''
  })

  const [deletePlaylistConfirmation, setDeletePlaylistConfirmation] = useState({
    open: false,
    idToDelete: ''
  })

  const [openAddSongBar, setOpenAddSongBar] = useState(false);

  const toggleOpenAddSongBar = () => {
    setOpenAddSongBar(state => !state);
  }
  const handleSongDelete = (_id) => {
    setDeleteSongConfirmation(state => ({
      ...state,
      open: true,
      idToDelete: _id
    }))
  }

  const handlePlaylistDelete = (_id) => {
    setDeletePlaylistConfirmation(state => ({
      ...state,
      open: true,
      idToDelete: _id
    }))
  }

  // ACTION FOR DELETE CONFIRMATION =======================
  const actionTrueDeleteSongConfirmation = (_id) => {
    alert(`This id ${_id} playList will be deleted`)
  }
  const handleCloseDeleteSongConfirmation = () => {
    setDeleteSongConfirmation(state => ({
      ...state,
      open: false,
      idToDelete: ''
    }))
  }

  const actionTrueDeletePlaylistConfirmation = (_id) => {
    alert(`This id ${_id} playList will be deleted`)
  }
  const handleCloseDeletePlaylistConfirmation = () => {
    setDeletePlaylistConfirmation(state => ({
      ...state,
      open: false,
      idToDelete: ''
    }))
  }
  //========================================================


  const handleSongPlay = (id) => {
    console.log(`SONG WITH ID: ${id} WILL BE PLAYED`)
  }

  const handleOpenAddNewSong = () => {
    console.log(`HANDLE OPEN ADD NEW SONG`)
  }


  useEffect(() => {
    dispatch(getPlaylistDetailAction(playlist_id))
  }, [dispatch, playlist_id])

  useEffect(() => {
    return () => {
      console.log('COMPONENT WILL UNMOUNT')
      dispatch(resetPlaylistDetailAction());
    }
  }, [dispatch])

  if (!playlistDetailData._id) return (
    <div className={classes.pleaseWait}>
      <CircularProgress />
    </div>)
  return (
    <Container>
      <PlaylistHeader
        playlistId={playlist_id}
        playlistTitle={playlistDetailData.playlistTitle}
        author={playlistDetailData.author}
        description={playlistDetailData.description}
        duration={playlistDetailData.playlistDuration}
        photo={playlistDetailData.playlistImage}
        totalSongs={playlistDetailData.songs.length}
        key={playlistDetailData._id}
        handleDelete={handlePlaylistDelete}
      />
      <div className={classes.buttonContainer}>
        <Button onClick={toggleOpenAddSongBar} startIcon={<img src={plusIcon} alt="..." />} className={classes.buttonAddSonng} variant="contained" color="primary">Add Song</Button>
      </div>
      <AddSongSearcBar open={openAddSongBar} />
      <SongListTable data={playlistDetailData.songs} handleDelete={handleSongDelete} handleSongPlay={handleSongPlay} handleAddNewSong={handleOpenAddNewSong} />
      <SongListList data={playlistDetailData.songs} handleDelete={handleSongDelete} handleSongPlay={handleSongPlay} />


      <ConfirmationDialog
        open={deleteSongConfirmation.open}
        title="Delete Song"
        mainText="Are you sure want to delete this song ?"
        secondaryText="Note: After deletion, the action cannot be undoned"
        actionTrue={() => actionTrueDeleteSongConfirmation(deleteSongConfirmation.idToDelete)}
        handleClose={handleCloseDeleteSongConfirmation}
        buttonOk="Delete"
        buttonVariant="danger"
      />

      <ConfirmationDialog
        open={deletePlaylistConfirmation.open}
        title="Delete Playlist"
        mainText="Are you sure want to delete this playlist ?"
        secondaryText="Note: After deletion, the action cannot be undoned"
        actionTrue={() => actionTrueDeletePlaylistConfirmation(deletePlaylistConfirmation.idToDelete)}
        handleClose={handleCloseDeletePlaylistConfirmation}
        buttonOk="Delete"
        buttonVariant="danger"
      />

    </Container>
  )
}

export default SongList
