import React, { useState } from 'react';
import { Divider, IconButton, makeStyles, Typography, withStyles, Menu, MenuItem } from '@material-ui/core';
import { secondsToHMS } from '../../../tools/timeConverter';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { sourceUrl } from '../../../redux/Api/setupAPI';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { openCreatePlaylistModalAction } from '../../../redux/actions/modalAction';
import CreatePlaylistModal from '../../../components/createPlaylistModal/CreatePlaylistModal';
// import { sourceUrl } from '../../../redux/Api/setupAPI';

const StyledRating = withStyles({
  iconEmpty: {
    color: '#4399FD'
  },
  iconFilled: {
    color: '#4399FD',
  },
  iconHover: {
    color: '#4399FD',
  },
})(Rating);

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    }
  },
  description: {

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    }
  },
  descriptionContent: {

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 7, 3, 3),
    },

    '& > .MuiTypography-root': {
      marginBottom: theme.spacing(2),
      textAlign: 'justify',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    }
  },
  moreDetails: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(0),
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center'
    }
  },
  leftSide: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '75%',
    }
  },
  actionHeaderContainer: {
    position: 'absolute',
    right: '0',
    top: '-13px',
    [theme.breakpoints.up("md")]: {
      top: '65px'
    }
  },
  rightSide: {
    [theme.breakpoints.up('md')]: {
      width: '25%',
      display: 'flex',
      justifyContent: 'center'
    }
  },
  playlistTitle: {
    fontSize: theme.spacing(2),
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    '& span': {
      fontWeight: 'normal',
      fontSize: '0.8em',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.spacing(3)
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(4)
    },
  },
  playListPhoto: {
    width: '120px',
    display: 'block',
    borderRadius: theme.spacing(1),
    margin: '1em auto',
    [theme.breakpoints.up('md')]: {
      margin: '0',
    }
  },
  separatorDot: {
    height: '4px',
    width: '4px',
    background: '#3C4156',
    borderRadius: '4px',
    margin: theme.spacing(0, 1),
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  ratingInput: {
    background: "#1F1D2B",
    padding: '20px',
    borderRadius: '8px',
    '& .MuiDivider-root': {
      marginLeft: '-20px',
      marginRight: '-20px',
    },
    '& > .MuiTypography-root': {
      paddingBottom: '10px',
      textAlign: 'center',
      fontSize: '20px'
    },
    [theme.breakpoints.up('md')]: {
      width: '185px',
    },
  },
  ratingContainer: {
    paddingTop: '10px',
    textAlign: 'center'
  },
  editDetailMenu:{
    '& .MuiList-root':{
      background: "#1F1D2B",
      padding: theme.spacing(1),
      
    },
    '& .MuiMenuItem-root':{
      transition: 'all 0.5s ease',
      '&:first-child':{
        borderRadius: theme.spacing(1,1,0,0),
        // '&:hover':{
        //   background: theme.palette.info.main,
        // }
      },
      '&:last-child':{
        borderRadius: theme.spacing(0,0,1,1),
        '&:hover':{
          background: theme.palette.error.main,
        }
      }
    }
  }
}))
const PlaylistHeader = ({playlistId, playlistTitle, photo, description, author, totalSongs, duration, handleDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch()


  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenCreatePlaylistModal = () => {
    dispatch(openCreatePlaylistModalAction());
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/** LEFT SIDE */}
      <div className={classes.leftSide}>
        <Typography className={classes.playlistTitle} variant="h4">Created Playlist / <span>{playlistTitle}</span></Typography>
        <div className={classes.description}>
          <img className={classes.playListPhoto} src={sourceUrl + photo} alt="..." />
          <div className={classes.descriptionContent}>
            <Typography>{description}</Typography>
            <div className={classes.moreDetails}>
              <Typography>{`By ${author.username}`}</Typography>
              <div className={classes.separatorDot}></div>
              <Typography>{`${totalSongs} songs`}</Typography>
              <div className={classes.separatorDot}></div>
              <Typography>{`About ${secondsToHMS(duration)}`}</Typography>
            </div>
          </div>
        </div>
        <div className={classes.actionHeaderContainer}>
          <IconButton onClick={handleClickMenu}>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {/** RIGHT SIDE */}
      <div className={classes.rightSide}>
        <div className={classes.ratingInput}>
          <Typography>Give Rating</Typography>
          <Divider />
          <div className={classes.ratingContainer}>
            <StyledRating
              name="customized-color"
              defaultValue={2}
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          </div>
        </div>
      </div>


      <Menu
        id="edit-detail-menu"
        className={classes.editDetailMenu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleOpenCreatePlaylistModal}>Edit Playlist</MenuItem>
        <Divider/>
        <MenuItem onClick={() => handleDelete(playlistId)}>Delete Playlist</MenuItem>
      </Menu>
      <CreatePlaylistModal photo={photo} title={playlistTitle} description={description} actionUpdate={true}/>
    </div>
  )
}

export default PlaylistHeader