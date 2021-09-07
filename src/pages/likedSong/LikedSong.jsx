import { CircularProgress, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserLikedSongsAction } from '../../redux/actions/userLikedSongsAction';
import LinedText from '../../components/commons/LinedText';
import SongListTable from '../songList/SongListComponent/SongListTable';
import SongListList from '../songList/SongListComponent/SongListList';
import usePlayerAction from '../../functions/usePlayerAction';


const useStyles = makeStyles(theme => ({
  root:{
    '& .liked-header':{
      marginBottom: theme.spacing(2),
      '& .MuiTypography-root:first-child':{
        fontSize: '3em',
        textShadow: '0 0 20px #0065DA'
      }
    }
  },
  pleaseWait: {
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))


const LikedSong = () => {
  const dispatch = useDispatch();
  const playerAction = usePlayerAction();
  const playlistDetail = useSelector(state => state.playlistDetail);
  const playlistDetailData = playlistDetail.data;
  const user_id = localStorage.getItem('user_id');
  const classes = useStyles();

  useEffect(() => {
    dispatch(getUserLikedSongsAction(user_id))
  }, [dispatch, user_id, playlistDetailData]);


  if (!playlistDetailData.songs) return (
    <div className={classes.pleaseWait}>
      <CircularProgress />
    </div>)
  return (
    <Container className={classes.root}>
      <div className="liked-header">
        <Typography align="center">Your Liked Songs</Typography>
        <LinedText text={`${playlistDetail.data.songs?.length || 0} songs`} lineLeft={true} lineRight={true}/>
      </div>
      <div>
      <SongListTable isOwner={false} data={playlistDetailData.songs} handleDelete={() => {}} handleSongPlay={playerAction.handleSongPlay} handleAddNewSong={()=>{}} />
      <SongListList isOwner={false} data={playlistDetailData.songs} handleDelete={() => {}} handleSongPlay={playerAction.handleSongPlay} />
      </div>
    </Container>
  )
}

export default LikedSong
