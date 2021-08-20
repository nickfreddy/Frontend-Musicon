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
  Container,
  Button,
} from '@material-ui/core';
import React from 'react';
import samplePhoto from '../../../assets/img/XMLID1383.svg';
import editIcon from '../../../assets/img/editIcon.svg';
import deleteIcon from '../../../assets/img/deleteIcon.svg';
import { useHistory, useRouteMatch } from 'react-router';


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
  playListTitleTable: {
    display: 'flex',
    alignItems: 'center'
  },
  playlistIcon: {
    marginRight: theme.spacing(2)
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
    '& .MuiButton-root':{
      display: 'block',
      margin: '1em auto'
    }
  }
}))
//==================================================





const CreatedPlaylistTable = ({ data, handleSongPlay, handleDelete, handleOpenCreatePlaylistModal }) => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch()

  const combineIconAndTitle = (icon, title) => (
    <div className={classes.playListTitleTable}>
      {icon ?
        <img className={`${classes.playlistIcon}`} width="40px" src={icon} alt="" />
        :
        <img className={`${classes.playlistIcon}`} width="40px" src={samplePhoto} alt="" />
      }
      <Typography>{title}</Typography>
    </div>
  );

  const routeToPlaylistContent = (playlist_id) => {
    history.push(`${url}/${playlist_id}`)
  }


  const renderTableContent = (data) => {
  if(data.length === 0) return (
    <TableRow className={classes.tableRowContentEmpty}>
      <TableCell colSpan={5}>
        <Typography variant="h6" align="center">Opps..., you don't have any playlist yet</Typography>
        <Button onClick={handleOpenCreatePlaylistModal} variant="contained" color="primary">Create new playlist</Button>
      </TableCell>
    </TableRow>
  )

  return data.map((playList, index) => (
      <TableRow key={index} className={classes.tableRowContent}>
        <TableCell padding="none" onClick={() => handleSongPlay(playList._id)}>
          <Typography align="center">
            {index + 1}
          </Typography>
        </TableCell>
        <TableCell padding="none" style={{ width: 400 }} onClick={() => handleSongPlay(playList._id)}>
          {combineIconAndTitle(playList.playlistIcon, playList.title)}
        </TableCell>
        <TableCell padding="none" onClick={() => handleSongPlay(playList._id)}>
          <Typography align="center">
            {playList.totalSong}
          </Typography>
        </TableCell >
        <TableCell padding="none" onClick={() => handleSongPlay(playList._id)}>
          <Typography align="center">
            {playList.dateCreated}
          </Typography>
        </TableCell>
        <TableCell padding="none" align="center">
          <IconButton onClick={() => routeToPlaylistContent(playList._id)}>
            <img src={editIcon} alt="..." />
          </IconButton>
          <IconButton onClick={() => handleDelete(playList._id)}>
            <img src={deleteIcon} alt="..." />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  }

  return (
    <TableContainer component={Container} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">NO</TableCell>
            <TableCell align="left">TITLE</TableCell>
            <TableCell align="center">TOTAL SONGS</TableCell>
            <TableCell align="center">DATE CREATED</TableCell>
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

export default CreatedPlaylistTable
