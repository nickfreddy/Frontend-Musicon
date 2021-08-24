import {
  makeStyles,
  TableCell,
  TableRow,
  Typography,
  IconButton,
  alpha,
} from '@material-ui/core';
import React from 'react';
import samplePhoto from '../../../../assets/img/XMLID1383.svg';
import deleteIcon from '../../../../assets/img/deleteIcon.svg';
import { secondsDuration } from '../../../../tools/timeConverter';

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
    paddingBottom: theme.spacing(2)
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

const SongListTableItem = ({ isOwner, song, handleDelete, handleSongPlay, index }) => {
  const classes = useStyles();

  const combineIconAndTitle = (icon, title) => (
    <div className={classes.songTitleTable}>
      {icon ?
        <img className={`${classes.playlistIcon}`} width="60px" src={icon} alt="" />
        :
        <img className={`${classes.playlistIcon}`} width="60px" src={samplePhoto} alt="" />
      }
      <Typography>{title}</Typography>
    </div>
  );


  return (
    <TableRow className={classes.tableRowContent}>
      <TableCell padding="none" onClick={handleSongPlay}> {/** Play song */}
        <Typography align="center">
          {Number(index) + 1}
        </Typography>
      </TableCell>
      <TableCell padding="none" style={{ width: 400 }} onClick={handleSongPlay}>
        {combineIconAndTitle(song.songImage, song.songTitle)}
      </TableCell>
      <TableCell padding="none" onClick={handleSongPlay}>
        <Typography align="center">
          {song.artistId.name}
        </Typography>
      </TableCell >
      <TableCell padding="none" onClick={handleSongPlay}>
        <Typography align="center">
          {secondsDuration(song.songDuration)}
        </Typography>
      </TableCell>
      {isOwner &&
        <TableCell padding="none" align="center">
          <IconButton onClick={() => handleDelete(song._id)}>
            <img src={deleteIcon} alt="..." />
          </IconButton>
        </TableCell>
      }
    </TableRow>
  )
}

export default SongListTableItem
