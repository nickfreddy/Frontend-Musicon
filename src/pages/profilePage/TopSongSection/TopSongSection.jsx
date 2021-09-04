import {
  TableContainer,
  Table,
  makeStyles,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  // IconButton,
  alpha,
  List,
  ListItem,
} from '@material-ui/core'
// import { Delete } from '@material-ui/icons';
import React, { useEffect } from 'react';
import samplePhoto from '../../../assets/img/XMLID1383.svg'
import SongListItem from './SongListItem';
// import editIcon from '../../../assets/img/editIcon.svg';
// import deleteIcon from '../../../assets/img/deleteIcon.svg'
import { useDispatch, useSelector, connect } from 'react-redux';
import { getUserTopSongsAction } from '../../../redux/actions/userTopSongsAction.js'
import { Skeleton } from '@material-ui/lab';
import { secondsDuration } from '../../../tools/timeConverter';
import { setCurrentPlayingAction, setPlayCurrentPlayingAction } from '../../../redux/actions/currentPlayingAction';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';


const dummyData = [
  {
    _id: '31',
    songIcon: '',
    title: 'Jika Kami Bersama',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '32',
    songIcon: samplePhoto,
    title: 'Kuat Kita Bersinar',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '33',
    songIcon: samplePhoto,
    title: 'Kuta Rock City',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '34',
    songIcon: samplePhoto,
    title: 'Angels and Outsider',
    artist: 'Superman Is Dead',
    duration: '3.20',
  }, {
    _id: '35',
    songIcon: samplePhoto,
    title: 'Punk Rock City',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '36',
    songIcon: samplePhoto,
    title: 'Lady Rose',
    artist: 'Superman Is Dead',
    duration: '3.20',
  }
]

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    background: '#1F1D2B',
    borderRadius: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  songListContainer: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  songTitleTable: {
    display: 'flex',
    alignItems: 'center'
  },
  songIcon: {
    marginRight: theme.spacing(2)
  },
  tableHead: {
    background: "linear-gradient(90deg, #4399FD, #0065DA)",
    '& > .MuiTableCell-root': {
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  },
  tableRowContent: {
    background: alpha('#FFFFFF', 0),
    transition: 'all 0.4s ease',
    '&:hover': {
      background: alpha('#2D304D', 0.9),
      cursor: 'pointer',
      '& .playNumberIcon':{
        display: 'block',
      },
      '& .numberIcon':{
        display: 'none'
      }
    },
    '& .MuiTableCell-root': {
      border: 'none',
      padding: theme.spacing(0.5, 0),
      '&:first-child': {
        borderRadius: '8px 0 0 8px',
      },
      '&:last-child': {
        borderRadius: '0 8px 8px 0',
      },
    }
  },

  skeletonListSong: {
    height: '50px',
    borderRadius: theme.spacing(1)
  },
  emptySongList: {
    background: '#1F1D2B',
    borderRadius: theme.spacing(1),
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyTableList:{
    borderRadius: theme.spacing(1),
  },
  playArrowIcon: {
    textAlign: 'center'
  },
  songNumber:{
    '& .playNumberIcon':{
      display: 'none',
      textAlign: 'center'
    }

  }
}))

const TopSongSection = ({currentPlaying}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userTopSongs = useSelector(state => state.userTopSongs);

  const combineIconAndTitle = (icon, title) => (
    <div className={classes.songTitleTable}>
      {icon ?
        <img className={`${classes.songIcon}`} width="40px" src={icon} alt="" />
        :
        <img className={`${classes.songIcon}`} width="40px" src={samplePhoto} alt="" />
      }
      <Typography>{title}</Typography>
    </div>
  );

  const handleDelete = (_id) => {
    // alert(`This id ${_id} song will be deleted`)
  }

  const handleSongPlay = (song) => {
    dispatch(setCurrentPlayingAction(song));
    dispatch(setPlayCurrentPlayingAction());
  }

  // RENDERING TABLE CONTENT
  const renderTableContent = () => {
    if (userTopSongs.loading) return (
      dummyData.map((song, index) => (
        <TableRow key={index} className={classes.tableRowContent}>
          <TableCell colSpan={4} padding="none">
            <Skeleton className={classes.emptyTableList} variant="rect" height="50px" />
          </TableCell>
        </TableRow>
      )));

    if (userTopSongs.data.length === 0) return (
      <TableRow className={classes.tableRowContent}>
        <TableCell align="center" className={classes.emptyTableRow} colSpan={4} padding="none">
          <Typography>Opps you dont have top songs right now</Typography>
        </TableCell>
      </TableRow>
    )

    return userTopSongs.data.map((song, index) => (
      <TableRow key={index} className={classes.tableRowContent}>
        <TableCell padding="none" onClick={() => handleSongPlay(song)}>
          {song._id === currentPlaying.songDetail._id ?
          <div className={classes.playArrowIcon}>
            {currentPlaying.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </div>
          :
          <div className={classes.songNumber}>
            <div className="playNumberIcon">
              <PlayArrowIcon />
            </div>
            <Typography className="numberIcon" align="center">
              {Number(index) + 1}
            </Typography>
          </div>
        }
        </TableCell>
        <TableCell padding="none" style={{ width: 400 }} onClick={() => handleSongPlay(song)}>
          {combineIconAndTitle(song.songImage, song.songTitle)}
        </TableCell>
        <TableCell padding="none" onClick={() => handleSongPlay(song)}>
          <Typography align="center">
            {song.artistId?.name || 'under maintenance'}
          </Typography>
        </TableCell >
        <TableCell padding="none" onClick={() => handleSongPlay(song)}>
          <Typography align="center">
            {secondsDuration(song.songDuration)|| 'under maintenance'}
          </Typography>
        </TableCell>
      </TableRow>
    ))
  }

  //RENDERING LIST CONTENT
  const renderListItem = () => {
    if (userTopSongs.loading) return (
      dummyData.map((song, index) => (
        <ListItem key={index}>
          <Skeleton variant="rect" className={classes.skeletonListSong} />
        </ListItem>
        //<SongListItem key={song._id} number={index + 1} id={song._id} image={song.songIcon} title={song.title} artist={song.artist} duration={song.duration} onPlay={() => handleSongPlay(song)} onDelete={() => handleDelete(song._id)} />
      ))
    )
    if (userTopSongs.data.length === 0) return (
      <ListItem className={classes.emptySongList}>
        <Typography>Opps. you dont have top song yet</Typography>
      </ListItem>
    )
    return (
      userTopSongs.data.map((song, index) => (
        <SongListItem key={song._id} number={index + 1} id={song._id} image={song.songImage} title={song.songTitle} artist={song.artistId?.name || 'under maintenance'} duration={secondsDuration(song.songDuration)  || 'under maintenance'} onPlay={() => handleSongPlay(song)} onDelete={() => handleDelete(song._id)} />
      ))
    )

  }


  useEffect(() => {
    dispatch(getUserTopSongsAction(1, 10))
  }, [dispatch])
  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.tableHead}>
              <TableCell align="center">No</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="center">Artist</TableCell>
              <TableCell align="center">Duration</TableCell>
              {/* <TableCell align="center">Action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableContent()}
          </TableBody>
        </Table>
      </TableContainer>
      {/* LIST MODE FOR MOBILE VIEW */}
      <List className={classes.songListContainer}>
        {renderListItem()}
      </List>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying
})
export default connect(mapStateToProps)(TopSongSection)
