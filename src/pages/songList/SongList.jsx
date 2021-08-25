import { Button, Container, CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//DUMMY RESPONSE DATA GET PLAYLIST DETAIL BY ID -contain song
import PlaylistHeader from './SongListComponent/PlaylistHeader';
import SongListTable from './SongListComponent/SongListTable';
import SongListList from './SongListComponent/SongListList';
import { makeStyles } from '@material-ui/core';
import plusIcon from '../../assets/img/carbon_add.svg'
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import AddSongSearcBar from './SongListComponent/AddSongSearcBar';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylistDetailAction, resetPlaylistDetailAction } from '../../redux/actions/playlistDetailAction';
import { deleteUserPlaylistAction } from '../../redux/actions/userPlaylistAction';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteSongFromPlaylistAction } from '../../redux/actions/playlistDetailAction';


const useStyles = makeStyles(theme => ({
  buttonContainer: {
    textAlign: 'center',
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  buttonAddSonng: {
    fontWeight: 700,
    textTransform: 'none',
    minWidth: 140
  },
  pleaseWait: {
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))


const SongList = ({ userPlaylist }) => {
  const { playlist_id } = useParams() // its used to getting response from API
  const classes = useStyles();
  const dispatch = useDispatch();
  const playlistDetail = useSelector(state => state.playlistDetail);
  const playlistDetailData = playlistDetail.data;
  const history = useHistory();
  const user_id = localStorage.getItem('user_id');
  const location = useLocation();
  const nowLocation = location.pathname.split('/')[2];
  console.log(nowLocation);


  const [deleteSongConfirmation, setDeleteSongConfirmation] = useState({
    open: false,
    idToDelete: ''
  })

  const [deletePlaylistConfirmation, setDeletePlaylistConfirmation] = useState({
    open: false,
    idToDelete: ''
  })

  const [isOwner, setIsOwner] = useState(false);

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
  const actionTrueDeleteSongConfirmation = (playlistId, songId) => {
    // alert(`This id ${_id} playList will be deleted`)
    dispatch(deleteSongFromPlaylistAction(playlistId, songId, handleCloseDeleteSongConfirmation))
  }

  const handleCloseDeleteSongConfirmation = () => {
    setDeleteSongConfirmation(state => ({
      ...state,
      open: false,
      idToDelete: ''
    }))
  }


  const handleCloseDeletePlaylistConfirmation = () => {
    setDeletePlaylistConfirmation(state => ({
      ...state,
      open: false,
      idToDelete: ''
    }));
    history.push('/user/createdPlaylist');
  }
  const actionTrueDeletePlaylistConfirmation = (_id) => {
    // alert(`This id ${_id} playList will be deleted`)
    dispatch(deleteUserPlaylistAction(_id, handleCloseDeletePlaylistConfirmation));
  }
  //========================================================


  const handleSongPlay = (id) => {
    console.log(`SONG WITH ID: ${id} WILL BE PLAYED`)
  }


  useEffect(() => {
    dispatch(getPlaylistDetailAction(playlist_id))
    // if(playlistDetail.)
  }, [dispatch, playlist_id, user_id])


  useEffect(() => {
    if (!playlistDetail.data.author) return; //check if data is fullfiled, if not skip this effect
    if (playlistDetail.data.author?._id === user_id) {
      console.log('I AM THE OWNER OF THIS PLAYLIST');
      setIsOwner(true)
    } else {
      console.log('I AM NOT THE OWNER OF THIS PLAYLIST')
      setIsOwner(false)
    }
  }, [playlistDetail.data.author, playlistDetail.data.author?._id, user_id])

  //CLEANUP
  useEffect(() => {
    return () => {
      // console.log('COMPONENT WILL UNMOUNT')
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
        nowLocation = {nowLocation === "playlist" ? "Playlist" : "Created Playlist"}
        playlistId={playlist_id}
        playlistTitle={playlistDetailData.playlistTitle}
        author={playlistDetailData.author}
        description={playlistDetailData.description}
        duration={playlistDetailData.playlistDuration}
        photo={playlistDetailData.playlistImage}
        totalSongs={playlistDetailData.songs.length}
        key={playlistDetailData._id}
        handleDelete={handlePlaylistDelete}
        playlistRating={playlistDetailData.playlistRating}
        isOwner={isOwner}
      />
      {isOwner &&
        <div className={classes.buttonContainer}>
          {openAddSongBar ?
            <Button onClick={toggleOpenAddSongBar} className={classes.buttonAddSonng} variant="contained" color="primary">Close</Button>
            :
            <Button onClick={toggleOpenAddSongBar} startIcon={<img src={plusIcon} alt="..." />} className={classes.buttonAddSonng} variant="contained" color="primary">Add Song</Button>
          }
        </div>
      }

      <AddSongSearcBar open={openAddSongBar} />
      <SongListTable isOwner={isOwner} data={playlistDetailData.songs} handleDelete={handleSongDelete} handleSongPlay={handleSongPlay} handleAddNewSong={toggleOpenAddSongBar} />
      <SongListList isOwner={isOwner} data={playlistDetailData.songs} handleDelete={handleSongDelete} handleSongPlay={handleSongPlay} />


      <ConfirmationDialog
        open={deleteSongConfirmation.open}
        title="Delete Song"
        mainText="Are you sure want to delete this song ?"
        secondaryText="Note: After deletion, the action cannot be undoned"
        actionTrue={() => actionTrueDeleteSongConfirmation(playlist_id, deleteSongConfirmation.idToDelete)}
        handleClose={handleCloseDeleteSongConfirmation}
        buttonOk="Delete"
        buttonVariant="danger"
        loading={playlistDetail.loading}
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
        loading={userPlaylist.loading}
      />

    </Container>
  )
}

const mapStateToProps = (state) => ({
  userPlaylist: state.userPlaylist
})
export default connect(mapStateToProps)(SongList)
