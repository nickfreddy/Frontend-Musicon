import React from "react";
import { makeStyles } from "@material-ui/core";
import PlaylistCard from "./PlaylistCard";
import SamplePlaylistImage from "../../assets/img/facebookProfile.jpg";

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
}));

const dummyData = [1, 2, 3, 4, 5, 6];

const renderPlaylistCard = dummyData.map((data, index) => (
  <PlaylistCard
    key={index}
    playlistImage={SamplePlaylistImage}
    playlistMaker="Surya Adi"
    playlistTitle="Contoh Playlist"
    playlistUrl="123"
    ratingValue="--"
  />
));

export default function PlaylistItems() {
  const classes = useStyles();
  return <div className={classes.root}>{renderPlaylistCard}</div>;
}
