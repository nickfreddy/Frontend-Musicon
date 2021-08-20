import { Button, Container } from '@material-ui/core'
import React, {useState} from 'react'
// import { useParams } from 'react-router'
//DUMMY RESPONSE DATA GET PLAYLIST DETAIL BY ID -contain song
import dummyRsponse from '../../assets/example-response/get-playlist-by-id.json'
import PlaylistHeader from './SongListComponent/PlaylistHeader';
import SongListTable from './SongListComponent/SongListTable';
import SongListList from './SongListComponent/SongListList';
import { makeStyles } from '@material-ui/styles';
import plusIcon from '../../assets/img/carbon_add.svg'
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';

const responseData = dummyRsponse.data
console.log(responseData);

const useStyles = makeStyles(theme => ({
  buttonContainer:{
    textAlign: 'right',
    margin: theme.spacing(2, 0)
  },
  buttonAddSonng: {
    fontWeight: 700,
    textTransform: 'none',
  }
}))


const SongList = () => {
  // const { playlist_id } = useParams() // its used to getting response from API
  const classes = useStyles();

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


  const handleSongPlay = (id) => {
    console.log(`SONG WITH ID: ${id} WILL BE PLAYED`)
  }

  const handleOpenAddNewSong = () => {
    console.log(`HANDLE OPEN ADD NEW SONG`)
  }
  return (
    <Container>
      <PlaylistHeader
        playlistTitle={responseData.playlistTitle}
        author={responseData.author}
        description={responseData.description}
        duration={responseData.playlistDuration}
        photo={responseData.playlistImage}
        totalSongs={responseData.songs.length}
        key={responseData._id}
      />
      <div className={classes.buttonContainer}>
        <Button startIcon={<img src={plusIcon} alt="..." />} className={classes.buttonAddSonng} variant="contained" color="primary">Add Song</Button>
      </div>
      <SongListTable data={responseData.songs} handleDelete={handleDelete} handleSongPlay={handleSongPlay} handleAddNewSong={handleOpenAddNewSong} />
      <SongListList data={responseData.songs} handleDelete={handleDelete} handleSongPlay={handleSongPlay} />


      <ConfirmationDialog
        open={deleteConfirmation.open}
        title="Delete Song"
        mainText="Are you sure want to delete this song ?"
        secondaryText="Note: After deletion, the action cannot be undoned"
        actionTrue={() => actionTrueDeleteConfirmation(deleteConfirmation.idToDelete)}
        handleClose={handleCloseDeleteConfirmation}
        buttonOk="Delete"
        buttonVariant="danger"
      />
    </Container>
  )
}

export default SongList
