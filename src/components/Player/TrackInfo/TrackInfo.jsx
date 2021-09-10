import React, { useRef, useEffect, useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
// import sampleImage from '../../../assets/img/XMLID1383.svg';
import { connect } from 'react-redux';
import { selectPhotoSource } from '../../../tools/checkPhotoSource';
import Marquee from 'react-fast-marquee';



const titleWidth = 250;

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

  noSongImg:{
    background: '#666872',
    width: '50px',
    height: '50px',
    borderRadius:'4px',
    marginRight: theme.spacing(2)
  },
  textMarquee: {
    width: titleWidth
  },
  ellipsis: {
    whiteSpace: 'nowrap',
    width: '100%',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis'
  },
}))



const TrackInfo = ({ currentPlaying }) => {
  const classes = useStyles();
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  const [titleScroll, setTitleScroll] = useState(false);
  const [subTitleScroll, setSubTitleScroll] = useState(false);




  useEffect(() => {
    // console.log('current component offsetWidth', titleRef.current?.offsetWidth);
    // console.log('current component scrollWidth', titleRef.current?.scrollWidth);
    if (titleRef.current?.scrollWidth > titleWidth) {
      setTitleScroll(true)
    }
    if (subTitleRef.current?.scrollWidth > titleWidth) {
      setSubTitleScroll(true)
    }

    return () => {
      setTitleScroll(false);
      setSubTitleScroll(false);
    }

  }, [currentPlaying])
  return (
    <div className={classes.root}>
      {currentPlaying.songDetail.songImage ?
        <img src={selectPhotoSource(currentPlaying.songDetail.songImage)} alt="" />
        :
        <div className={classes.noSongImg}></div>
      }
      <div>
        {titleScroll ?
          <Marquee className={classes.textMarquee} gradient={false}>
            <Typography innerRef={titleRef} className={classes.ellipsis} variant="h5">{'| ' + currentPlaying.songDetail.songTitle + ' |' || 'No song selected'}</Typography>
          </Marquee>
          :
          <div className={classes.textMarquee}>
            <Typography innerRef={titleRef} className={classes.ellipsis} variant="h5">{currentPlaying.songDetail.songTitle || 'No song selected'}</Typography>
          </div>
        }

        {subTitleScroll ?
          <Marquee className={classes.textMarquee} gradient={false}>
            <Typography innerRef={subTitleRef} className={classes.ellipsis} variant="caption">{`${currentPlaying.songDetail.artistId?.name || 'artist'} - ${currentPlaying.songDetail.albumId?.albumTitle || 'album'}`}</Typography>
          </Marquee>
          :
          <div className={classes.textMarquee}>
            <Typography innerRef={subTitleRef} className={classes.ellipsis} variant="caption">{`${currentPlaying.songDetail.artistId?.name || 'artist'} - ${currentPlaying.songDetail.albumId?.albumTitle || 'album'}`}</Typography>
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying
})
export default connect(mapStateToProps)(TrackInfo)
