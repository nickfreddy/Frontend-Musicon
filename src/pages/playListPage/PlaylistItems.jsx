import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PlaylistCard from "./PlaylistCard";
// import SamplePlaylistImage from "../../assets/img/facebookProfile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistAction } from "../../redux/actions/playlistAction";
import { Skeleton } from "@material-ui/lab";
import { sourceUrl } from "../../redux/Api/setupAPI";
import { selectPhotoSource } from "../../tools/checkPhotoSource";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "left",
    },
  },
  playlistSkeleton: {
    margin: [[8, 8, 30, 8]],
    [theme.breakpoints.up('xs')]: {
      width: '45%',
      // height: 240
    },
    [theme.breakpoints.up('sm')]: {
      width: '31%',
      // height: 240
    },
    // [theme.breakpoints.up('md')]: {
    //   width: '31%',
    //   // height: 240
    // },
    [theme.breakpoints.up('lg')]: {
      width: '23%',
      // height: 240
    },

    '& .skeleton-media': {
      // width: '246px',
      // height: '246px',
      boxSizing: 'content-box',
      borderRadius: "8px",
      padding: theme.spacing(2),
      // background: '#2D304D',
      [theme.breakpoints.up('xs')]: {
        height: '150px',
      },
      [theme.breakpoints.up('sm')]: {
        // width: '100%',
        height: '190px',
      },
      [theme.breakpoints.up('lg')]: {
        // width: '100%',
        height: '210px',
      }
    },
    '& .skeleton-title': {
      marginTop: 10,
      borderRadius: "8px",
      width: '80%',
    },
    '& .skeleton-details': {
      marginTop: 10,
      borderRadius: "8px",
    }
  },
  emptyPlaylist: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];



export default function PlaylistItems() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const playlist = useSelector(state => state.playlist);



  const renderPlaylistCard = (playlists) => {
    if (playlists.loading) return dummyData.map((data) => (
      <div key={data} className={classes.playlistSkeleton}>
        <Skeleton className="skeleton-media" variant="rect" />
        <Skeleton className="skeleton-title" variant="rect" />
        <Skeleton className="skeleton-details" variant="rect" />
      </div>
    ));

    if (playlist.data.length === 0) return (
      <div className={classes.emptyPlaylist}>
        <Typography align="center" variant="h4">Playlist is empty</Typography>
      </div>
    );
    return playlists.data.map((data, index) => (
      <PlaylistCard
        key={data._id}
        playlistImage={selectPhotoSource(data.playlistImage, sourceUrl)}
        playlistMaker={data.author.username}
        playlistTitle={data.playlistTitle}
        playlistId={data._id}
        ratingValue={data.playlistRating}
      />
    ));
  }

  useEffect(() => {
    dispatch(getPlaylistAction());
  }, [dispatch])

  return (
    <div className={classes.root}>
      {renderPlaylistCard(playlist)}
    </div>
  );
}
