import React from "react";
import { connect } from "react-redux";
import { makeStyles, Box, Typography } from "@material-ui/core";
import SongCard from "./SongCard";
import Collapse from "@material-ui/core/Collapse";
import { Skeleton } from "@material-ui/lab";

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

  recomendedSongSkeleton: {
    height: '120px',
    borderRadius: '8px',
    margin: theme.spacing(0.7),
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      width: '48%',
    },
    [theme.breakpoints.up('lg')]:{
      width: '32%',
    }
  },

  newReleaseSongEmpty: {
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const RecomendedSong = ({ recomendedSong }) => {
  // console.log("RECOMENDED SONG ISINYA ADALAH :", recomendedSong);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  // const renderRecomendedSong = recomendedSong.data.map((song) => (
  //   <SongCard
  //     songDetail={song}
  //     key={song._id}
  //     songImage={song.songImage}
  //     songTitle={song.songTitle}
  //     albumTitle={song.albumId.albumTitle}
  //     songUrl={song.id}
  //   />
  // ));




  const renderRecomendedSong = (recomendedSongReducer) => {
    if (recomendedSongReducer.loading) return (
      <>
        <Skeleton variant="rect" className={classes.recomendedSongSkeleton} />
        <Skeleton variant="rect" className={classes.recomendedSongSkeleton} />
        <Skeleton variant="rect" className={classes.recomendedSongSkeleton} />
      </>
    );
    if (recomendedSongReducer.length === 0) return (
      <div className={classes.newReleaseSongEmpty}>
        <Typography>Opps no new recomended song for this time</Typography>
      </div>
    )
    return recomendedSongReducer.data.map((song) => (
      <SongCard
        songDetail={song}
        key={song._id}
        songImage={song.songImage}
        songTitle={song.songTitle}
        albumTitle={song.albumId.albumTitle}
        songUrl={song.id}
      />
    ));
  }







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
        <div className={classes.songlist}>{renderRecomendedSong(recomendedSong)}</div>
      </Collapse>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recomendedSong: state.recomendedSong,
});
export default connect(mapStateToProps)(RecomendedSong);
