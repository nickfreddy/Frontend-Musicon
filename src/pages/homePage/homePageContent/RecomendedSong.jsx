import React from "react";
import { connect } from "react-redux";
import { makeStyles, Box, Typography } from "@material-ui/core";
import SongCard from "./SongCard";
import Collapse from "@material-ui/core/Collapse";

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
  open: {
    padding: [[0, 20]],
    fontWeight: "bold",
    color: "#92929D",
    cursor: "pointer",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
}));

const RecomendedSong = ({ recomendedSong }) => {
  console.log("RECOMENDED SONG ISINYA ADALAH :", recomendedSong);

  const renderRecomendedSong = recomendedSong.data.map((song) => (
    <SongCard
      songDetail={song}
      key={song._id}
      songImage={song.songImage}
      songTitle={song.songTitle}
      albumTitle={song.albumId.albumTitle}
      songUrl={song.id}
    />
  ));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Recommended Song
      </Typography>

      <Box display="flex" justifyContent="flex-end">
        <Box>
          <Typography
            variant="body1"
            className={classes.open}
            open={open}
            onClick={handleChange}
          >
            See All
          </Typography>
        </Box>
      </Box>
      <Collapse in={open} collapsedSize={140}>
        <div className={classes.songlist}>{renderRecomendedSong}</div>
      </Collapse>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recomendedSong: state.recomendedSong,
});
export default connect(mapStateToProps)(RecomendedSong);
