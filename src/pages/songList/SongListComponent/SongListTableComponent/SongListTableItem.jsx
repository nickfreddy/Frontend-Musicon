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
import { connect } from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import LoveButton from '../../../../components/commons/LoveButton';

import usePlayerAction from '../../../../functions/usePlayerAction';

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
      cursor: 'pointer',
      '& .playNumberIcon': {
        display: 'block',
      },
      '& .numberIcon': {
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
  },
  playArrowIcon: {
    textAlign: 'center'
  },
  songNumber: {
    '& .playNumberIcon': {
      display: 'none',
      textAlign: 'center'
    }
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65px',
  }
}))
//==================================================

const SongListTableItem = ({ currentPlaying, isOwner, song, handleDelete, handleSongPlay, index }) => {
  const classes = useStyles();

  const player = usePlayerAction();

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
      <TableCell padding="none" > {/** Play song */}
        {song._id === currentPlaying.songDetail._id ?
          <div className={classes.playArrowIcon}>
            {currentPlaying.isPlaying ?
              <IconButton onClick={player.handlePauseAction}>
                <PauseIcon />
              </IconButton>
              :
              <IconButton onClick={() => handleSongPlay(song)}>
                <PlayArrowIcon />
              </IconButton>
            }
          </div>
          :
          <div className={classes.songNumber} >
            <div className="playNumberIcon">
              <IconButton onClick={() => handleSongPlay(song)}>
                <PlayArrowIcon />
              </IconButton>
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
          {song.artistId.name}
        </Typography>
      </TableCell >
      <TableCell padding="none" onClick={() => handleSongPlay(song)}>
        <Typography align="center">
          {secondsDuration(song.songDuration)}
        </Typography>
      </TableCell>
      <TableCell className={classes.actionButton} padding="none" align="center">
        <LoveButton songId={song._id} isLiked={song.isLiked} />
        {isOwner &&
          <IconButton onClick={() => handleDelete(song._id)}>
            <img src={deleteIcon} alt="..." />
          </IconButton>
        }
      </TableCell>
    </TableRow>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying
})
export default connect(mapStateToProps)(SongListTableItem)
