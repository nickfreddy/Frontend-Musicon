import React from "react";
import { connect } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import YourPlaylistCard from "./YourPlaylistCard";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [[20, 0]],
  },
  songlist: {
    marginTop: 10,
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "left",
    },
  },
}));

const YourPlaylist = ({ userPlaylist }) => {
  const renderUserPlaylist = userPlaylist.data.map((playlist) => (
    <YourPlaylistCard
      key={playlist._id}
      playlistImage={playlist.playlistImage}
      playlistTitle={playlist.playlistTitle}
      playlistUrl={playlist.id}
    />
  ));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: 20 }}>
        Your Playlist
      </Typography>
      <div className={classes.songlist}>{renderUserPlaylist}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userPlaylist: state.userPlaylist,
});
export default connect(mapStateToProps)(YourPlaylist);
