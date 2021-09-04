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
  Button,
} from '@material-ui/core';
import React from 'react';
import editIcon from '../../../assets/img/editIcon.svg';
import deleteIcon from '../../../assets/img/deleteIcon.svg';
import { useHistory, useRouteMatch } from 'react-router';
import { sourceUrl } from '../../../redux/Api/setupAPI';
import { formatDate } from '../../../tools/dateReformat';
import { connect } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
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
  playListTitleTable: {
    display: 'flex',
    alignItems: 'center'
  },
  playlistIcon: {
    marginRight: theme.spacing(2),
    borderRadius: '8px',
    objectFit: 'cover',
    objectPosition: 'top'
  },
  tableHead: {
    background: "linear-gradient(90deg, #4399FD, #0065DA)",
    '& > .MuiTableCell-root': {
      fontWeight: 700,
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
  tableRowContentEmpty: {
    background: alpha('#FFFFFF', 0),
    height: '25em',
    '& .MuiButton-root': {
      display: 'block',
      margin: '1em auto'
    }
  },
  tableListContentEmpty: {
    height: '53px',
    // borderRadius: theme.spacing(1)
  },
  titleCell:{
    [theme.breakpoints.up('md')]:{
      width: 300
    }
  }
}))
//==================================================





const CreatedPlaylistTable = ({ data, handleDelete, handleOpenCreatePlaylistModal, userPlaylist }) => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch()

  const combineIconAndTitle = (photo, title) => (
    <div className={classes.playListTitleTable}>
      {// This mitigate type of received photo to prevent broken photo display
        photo !== 'https://i1.sndcdn.com/artworks-000560586507-q7vve7-t500x500.jpg' ? //check if photo is not empty string
          typeof photo === 'string' ?
            <img className={`${classes.playlistIcon}`} width="40px" height="40px" src={sourceUrl + photo} alt="..." /> //if type of photo is string mostli its a url from server so use it
            : <img className={`${classes.playlistIcon}`} width="40px" height="40px" src={URL.createObjectURL(photo)} alt="..." /> //if type of photo is a file that inputed from form so use it
          : <img className={`${classes.playlistIcon}`} width="40px" height="40px" src="https://i1.sndcdn.com/artworks-000560586507-q7vve7-t500x500.jpg" alt="..." /> // if no photo provided so use local default photo
      }
      <Typography>{title}</Typography>
    </div>
  );

  const routeToPlaylistContent = (playlist_id) => {
    history.push(`${url}/${playlist_id}`)
  }


  const renderTableContent = (data) => {
    if (userPlaylist.loading) return ([1, 2, 3, 4, 5].map((dummy, index) => (
      <TableRow key={index} className={classes.tableRowContent} >
        <TableCell padding="none" colSpan={5}>
          {/* <Typography variant="h6" align="center"><CircularProgress/></Typography> */}
          <Skeleton variant="rect" className={classes.tableListContentEmpty} />
        </TableCell>
      </TableRow>
    ))
    )
    if (data.length === 0) return (
      <TableRow className={classes.tableRowContentEmpty}>
        <TableCell colSpan={5}>
          <Typography variant="h6" align="center">Opps..., you don't have any playlist yet</Typography>
          <Button onClick={handleOpenCreatePlaylistModal} variant="contained" color="primary">Create new playlist</Button>
        </TableCell>
      </TableRow>
    )

    return data.map((playList, index) => (
      <TableRow key={index} className={classes.tableRowContent}>
        <TableCell padding="none" onClick={() => routeToPlaylistContent(playList._id)}>
          <Typography align="center">
            {index + 1}
          </Typography>
        </TableCell>
        <TableCell padding="none" className={classes.titleCell} onClick={() => routeToPlaylistContent(playList._id)}>
          {combineIconAndTitle(playList.playlistImage, playList.playlistTitle)}
        </TableCell>
        <TableCell padding="none" onClick={() => routeToPlaylistContent(playList._id)}>
          <Typography align="center">
            {playList.songs.length}
          </Typography>
        </TableCell >
        <TableCell padding="none" onClick={() => routeToPlaylistContent(playList._id)}>
          <Typography align="center">
            {formatDate(playList.createdAt)}
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
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead >
          <TableRow className={classes.tableHead}>
            <TableCell align="center">NO</TableCell>
            <TableCell className={classes.titleCell} align="left">TITLE</TableCell>
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

const mapStateToProps = (state) => ({
  userPlaylist: state.userPlaylist
})
export default connect(mapStateToProps)(CreatedPlaylistTable)
