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
    '& .skeleton-media': {
      width: '246px',
      height: '246px',
      borderRadius: "8px",
    },
    '& .skeleton-title': {
      marginTop: 10,
      borderRadius: "8px",
      width: '200px',
    },
    '& .skeleton-details': {
      marginTop: 10,
      borderRadius: "8px",
    }
  },
  emptyPlaylist:{
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

    if(playlist.data.length === 0) return (
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
