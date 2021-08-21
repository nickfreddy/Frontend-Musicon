import {
  TableContainer,
  Table,
  makeStyles,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  IconButton,
  alpha,
  List,
} from '@material-ui/core'
// import { Delete } from '@material-ui/icons';
import React from 'react';
import samplePhoto from '../../../assets/img/XMLID1383.svg'
import SongListItem from './SongListItem';
// import editIcon from '../../../assets/img/editIcon.svg';
import deleteIcon from '../../../assets/img/deleteIcon.svg'

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
  tableHead:{
    background: "linear-gradient(90deg, #4399FD, #0065DA)",
    '& > .MuiTableCell-root':{
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  },
  tableRowContent: {
    background: alpha('#FFFFFF', 0),
    transition: 'all 0.4s ease',
    '&:hover': {
      background: alpha('#2D304D', 0.9),
      cursor: 'pointer'
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

}))

const TopSongSection = () => {
  const classes = useStyles();


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
    alert(`This id ${_id} song will be deleted`)
  }

  const handleSongPlay = (_id) => {
    console.log(`This song with id ${_id} will be played`)
  }

  // RENDERING TABLE CONTENT
  const renderTableContent = dummyData.map((song, index) => (
    <TableRow key={index} className={classes.tableRowContent}>
      <TableCell padding="none" onClick={() => handleSongPlay(song._id)}>
        <Typography align="center">
          {index + 1}
        </Typography>
      </TableCell>
      <TableCell padding="none" style={{ width: 400 }} onClick={() => handleSongPlay(song._id)}>
        {combineIconAndTitle(song.songIcon, song.title)}
      </TableCell>
      <TableCell padding="none" onClick={() => handleSongPlay(song._id)}>
        <Typography align="center">
          {song.artist}
        </Typography>
      </TableCell >
      <TableCell padding="none" onClick={() => handleSongPlay(song._id)}>
        <Typography align="center">
          {song.duration}
        </Typography>
      </TableCell>
      <TableCell padding="none" align="center">
        <IconButton onClick={() => handleDelete(song._id)}>
          <img src={deleteIcon} alt="..." />
        </IconButton>
      </TableCell>
    </TableRow>
  ))

  //RENDERING LIST CONTENT
  const renderListItem = dummyData.map((song, index) => (
    <SongListItem key={song._id} number={index + 1} id={song._id} image={song.songIcon} title={song.title} artist={song.artist} duration={song.duration} onPlay={() => handleSongPlay(song._id)} onDelete={() => handleDelete(song._id)} />
  ))

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
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableContent}
          </TableBody>
        </Table>
      </TableContainer>
      {/* LIST MODE FOR MOBILE VIEW */}
      <List className={classes.songListContainer}>
        {renderListItem}
      </List>
    </>
  )
}

export default TopSongSection
