import {
  TableContainer,
  Table,
  makeStyles,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  alpha,
} from '@material-ui/core';
import React from 'react';
// import samplePhoto from '../../../assets/img/XMLID1383.svg';
import SongListTableItem from './SongListTableComponent/SongListTableItem';

//useStyles==========================================
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
    },
    // paddingBottom: theme.spacing(2)
  },
  songTitleTable: {
    display: 'flex',
    alignItems: 'center'
  },
  playlistIcon: {
    marginRight: theme.spacing(2),
    borderRadius: '8px'
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
  tableRowContentEmpty: {
    background: alpha('#FFFFFF', 0),
    height: '25em',
    '& .MuiButton-root': {
      display: 'block',
      margin: '1em auto'
    }
  },
  spanLink: {
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  tableHead: {
    background: "linear-gradient(90deg, #4399FD, #0065DA)",
    '& > .MuiTableCell-root': {
      fontWeight: 700
    }
  }
}))
//==================================================





const SongListTable = ({ isOwner, data, handleDelete, handleSongPlay, handleAddNewSong }) => {
  const classes = useStyles();

  // const combineIconAndTitle = (icon, title) => (
  //   <div className={classes.songTitleTable}>
  //     {icon ?
  //       <img className={`${classes.playlistIcon}`} width="60px" src={icon} alt="" />
  //       :
  //       <img className={`${classes.playlistIcon}`} width="60px" src={samplePhoto} alt="" />
  //     }
  //     <Typography>{title}</Typography>
  //   </div>
  // );



  const renderTableContent = (data) => {
    if (data.length === 0) return (
      <TableRow className={classes.tableRowContentEmpty}>
        <TableCell colSpan={5}>
          {isOwner ?
            <>
              <Typography variant="h6" align="center">Let's find song for your playlist,</Typography>
              <Typography variant="h6" align="center">Please click <span className={classes.spanLink} onClick={handleAddNewSong}>Add Song</span> to add new song,</Typography>
            </>
            :
            <Typography variant="h6" align="center">This playlist has no any song</Typography>
          }
        </TableCell>
      </TableRow>
    )

    return data.map((song, index) => (
      <SongListTableItem isOwner={isOwner} handleDelete={handleDelete} handleSongPlay={handleSongPlay} song={song} key={index} index={index} />
      // <TableRow key={index} className={classes.tableRowContent}>
      //   <TableCell padding="none" onClick={() => handleSongPlay(song._id)}>
      //     <Typography align="center">
      //       {index + 1}
      //     </Typography>
      //   </TableCell>
      //   <TableCell padding="none" style={{ width: 400 }} onClick={() => handleSongPlay(song._id)}>
      //     {combineIconAndTitle(song.songImage, song.songTitle)}
      //   </TableCell>
      //   <TableCell padding="none" onClick={() => handleSongPlay(song._id)}>
      //     <Typography align="center">
      //       {song.artistId.name}
      //     </Typography>
      //   </TableCell >
      //   <TableCell padding="none" onClick={() => handleSongPlay(song._id)}>
      //     <Typography align="center">
      //       {secondsDuration(song.songDuration)}
      //     </Typography>
      //   </TableCell>
      //   <TableCell padding="none" align="center">
      //     <IconButton onClick={() => handleDelete(song._id)}>
      //       <img src={deleteIcon} alt="..." />
      //     </IconButton>
      //   </TableCell>
      // </TableRow>
    ));
  }

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead >
          <TableRow className={classes.tableHead}>
            <TableCell align="center">NO</TableCell>
            <TableCell align="left">TITLE</TableCell>
            <TableCell align="center">ARTIST</TableCell>
            <TableCell align="center">DURATION</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTableContent(data)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SongListTable
