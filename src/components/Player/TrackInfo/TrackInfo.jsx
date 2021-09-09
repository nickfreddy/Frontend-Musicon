import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
// import sampleImage from '../../../assets/img/XMLID1383.svg';
import { connect } from 'react-redux';
import { selectPhotoSource } from '../../../tools/checkPhotoSource';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    '& > img': {
      height: '50px',
      width: '50px',
      marginRight: theme.spacing(2)


    },
    [theme.breakpoints.up('sm')]: {
      gridColumn: 'span 2',

    },
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      justifyContent: "flex-start"
    }
  },
  ellipsis:{
    whiteSpace: 'nowrap',
    width: '240px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
}))

const TrackInfo = ({ currentPlaying }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {currentPlaying.songDetail.songImage &&
        <img src={selectPhotoSource(currentPlaying.songDetail.songImage)} alt="" />
      }
      <div>
        <Typography className={classes.ellipsis} variant="h5">{currentPlaying.songDetail.songTitle || 'No song selected'}</Typography>
        <Typography className={classes.ellipsis} variant="caption">{`${currentPlaying.songDetail.artistId?.name || 'artist'} - ${currentPlaying.songDetail.albumId?.albumTitle || 'album'}`}</Typography>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying
})
export default connect(mapStateToProps)(TrackInfo)
