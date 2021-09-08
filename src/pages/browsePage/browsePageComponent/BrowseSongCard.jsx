import React from "react";
// import { useHistory, useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import playIcon from '../../../assets/img/playSongIcon.svg';
import pauseIcon from '../../../assets/img/pauseIcon.svg';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { setCurrentPlayingAction, setPlayCurrentPlayingAction } from "../../../redux/actions/currentPlayingAction";
import usePlayerAction from "../../../functions/usePlayerAction";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: [[5, 5, 5, 5]],
    background: "#1F1D2B",
    borderRadius: "8px",
    height: 120,
    [theme.breakpoints.down("sm")]: {
      // width: "80vw",
      width: "100%",

    },
    [theme.breakpoints.up("sm")]: {
      // width: "44vw",
      width: "48%",

    },
    // [theme.breakpoints.up("md")]: {
    //   width: "33vw",
    // },
    [theme.breakpoints.up("lg")]: {
      width: "32%",
    },
    // [theme.breakpoints.up("xl")]: {
    //   width: "15vw",
    // },
  },
  media: {
    borderRadius: "8px",
    width: 96,
    height: 96,
  },
  actionarea: {
    padding: 12,
    borderRadius: "8px",
    height: 120,
    display: "flex",
    justifyContent: "flex-start",
    width: '100%',
    position: 'relative',
    // [theme.breakpoints.down("sm")]: {
    //   width: "80vw",
    // },
    // [theme.breakpoints.up("sm")]: {
    //   width: "44vw",
    // },
    // [theme.breakpoints.up("md")]: {
    //   width: "33vw",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   width: "24vw",
    // },
    // [theme.breakpoints.up("xl")]: {
    //   width: "15vw",
    // },
  },
  titletext: {
    padding: [[5, 0]],
    margin: "auto",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  titlewrapper: {
    textAlign: "left",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  playIcon: {
    position: 'absolute',
    bottom: '0px',
    right: '0px'
  }
}));

const BrowseSongCard = ({ songDetails, songImage, songTitle, albumTitle, songUrl }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const playerAction = usePlayerAction();
  const currentPlaying = useSelector(state => state.currentPlaying)
  // const history = useHistory();
  // const { url } = useRouteMatch();

  const handleSongPlay = (songData) => {
    if (currentPlaying.songDetail?._id === songDetails._id) {
      if (currentPlaying.isPlaying) return null
      dispatch(setCurrentPlayingAction(songData));
      dispatch(setPlayCurrentPlayingAction());
    } else {
      dispatch(setCurrentPlayingAction(songData));
      dispatch(setPlayCurrentPlayingAction());
    }
  }

  const renderPlayButton = () => {
    if (currentPlaying.songDetail?._id === songDetails._id) {
      if (currentPlaying.isPlaying) return (
        <IconButton onClick={playerAction.handlePauseAction} className={classes.playIcon}>
          <img src={pauseIcon} alt="..." />
        </IconButton>
      );
      return (
        <IconButton className={classes.playIcon}>
          <img src={playIcon} alt="..." />
        </IconButton>
      )

    } else {
      return (
        <IconButton className={classes.playIcon}>
          <img src={playIcon} alt="..." />
        </IconButton>
      )
    }
  }
  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.actionarea}
        onClick={() => handleSongPlay(songDetails)}
      >
        <CardMedia
          className={classes.media}
          image={songImage}
          title={songTitle}
        />
        <CardContent className={classes.titlewrapper}>
          <Typography gutterBottom variant="h6" className={classes.titletext}>
            {songTitle}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            className={classes.titletext}
            style={{ fontWeight: "normal" }}
          >
            {albumTitle}
          </Typography>
        </CardContent>
        {renderPlayButton()}

      </CardActionArea>
    </Card>
  );
};

export default BrowseSongCard;
