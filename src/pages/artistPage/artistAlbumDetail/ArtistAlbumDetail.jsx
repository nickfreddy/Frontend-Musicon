import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbumDetailsAction } from '../../../redux/actions/albumDetailsAction';
import { Container, Typography, makeStyles, CircularProgress, alpha } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import SongListTable from '../../songList/SongListComponent/SongListTable';
import SongListList from '../../songList/SongListComponent/SongListList';
import usePlayerAction from '../../../functions/usePlayerAction';
import { selectPhotoSource } from '../../../tools/checkPhotoSource';
import { sourceUrl } from '../../../redux/Api/setupAPI';
import { formatDate } from '../../../tools/dateReformat';
import DotSpacer from '../../../components/commons/DotSpacer';
import { secondsToHMS } from '../../../tools/timeConverter';



const ArtistAlbumDetail = () => {
  const dispatch = useDispatch();
  const { album_id } = useParams();
  const playerAction = usePlayerAction();
  const albumDetails = useSelector(state => state.albumDetails);
  const playlistDetail = useSelector(state => state.playlistDetail);
  const playlistDetailData = playlistDetail.data;
  const {
    albumTitle,
    songs,
    releaseDate,
    albumDuration,
    albumImage,
    artistId,
  } = albumDetails.data;


  const useStyles = makeStyles(theme => ({
    root: {},
    pleaseWait: {
      height: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerContainer: {
      background: `url(${artistId?.photo || 'none'})`,
      backgroundPosition: '0% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '11px'
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      padding: theme.spacing(5, 2),
      background: alpha("#1F1D2B", 0.8),
      borderRadius: '8px',
      [theme.breakpoints.up('md')]: {

      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      },
      '& > .header-img': {
        // width: "12%",

        '& img': {
          width: '100px',
          borderRadius: '8px',
          marginRight: theme.spacing(2)

        }
      },
      '& > .header-description': {
        '& > .album-title': {
          textAlign: 'center',
          [theme.breakpoints.up('md')]: {
            textAlign: 'left'
          }
        },
        '& > .header-sub-description': {
          textAlign: 'center',
          [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignItems: 'center',
          }
        },
        '& .song-total':{
          textAlign: 'center',
          [theme.breakpoints.up('sm')]:{
          },
          [theme.breakpoints.up('md')]:{
            textAlign: 'left'
          }
        }
      }

    },
    dotSpacer:{
      display: 'none',
      [theme.breakpoints.up('sm')]:{
        display: 'block'
      }
    }

  }))
  const classes = useStyles();



  useEffect(() => {
    dispatch(getAlbumDetailsAction(album_id))
  }, [album_id, dispatch])

  if (!playlistDetailData.songs || albumDetails.loading || !albumDetails.data._id) return (
    <div className={classes.pleaseWait}>
      <CircularProgress />
    </div>)
  return (
    <Container>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <div className="header-img">
            <img src={selectPhotoSource(albumImage, sourceUrl)} alt="..." />
          </div>
          <div className="header-description">
            <Typography className="album-title" variant="h4">{albumTitle}</Typography>
            <div className="header-sub-description">
              <Typography variant="h6">{`By ${artistId?.name || 'anonymous'}`}</Typography>
              <DotSpacer className={classes.dotSpacer} />
              <Typography variant="h6">{`on ${formatDate(releaseDate)}`}</Typography>
              <DotSpacer className={classes.dotSpacer} />
              <Typography variant="h6">{`About ${secondsToHMS(albumDuration)}`}</Typography>
            </div>
            <Typography className="song-total">{`${songs.length} Songs`}</Typography>
          </div>
        </div>
      </div>
      {/* <Divider className={classes.divider} /> */}
      <div className={classes.bodyPage}>
        <SongListTable isOwner={false} data={playlistDetailData.songs} handleDelete={() => { }} handleSongPlay={playerAction.handleSongPlay} handleAddNewSong={() => { }} />
        <SongListList isOwner={false} data={playlistDetailData.songs} handleDelete={() => { }} handleSongPlay={playerAction.handleSongPlay} />
      </div>

    </Container>
  )
}

export default ArtistAlbumDetail
