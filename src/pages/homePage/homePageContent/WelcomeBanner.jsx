import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { openCreatePlaylistModalAction } from "../../../redux/actions/modalAction";
import CreatePlaylistModal from "../../../components/createPlaylistModal/CreatePlaylistModal";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [[20, 0]],
    padding: [[30, 20, 20, 20]],
    borderRadius: "8px",
    background: "linear-gradient(90deg, #4399FD 0%, #0065DA 100%)",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  },
  button: {
    width: 190,
    height: 43,
    borderRadius: "4px",
    color: "#4399FD",
    background: "#FFFFFF",
    textTransform: "none",
    justifyContent: "space-around",
    padding: [[0, 20, 0, 12]],
    "&:hover": {
      color: "#FFFFFF",
      background: "#4399FD",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
  },
}));

const WelcomeBanner = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleOpenCreatePlaylistModal = () => {
    dispatch(openCreatePlaylistModalAction());
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        Welcome to Musicon!
      </Typography>
      <Typography variant="h6" style={{ marginTop: 20, marginBottom: 10 }}>
        Musicon provides you with various music, we have million music from all
        over the world. Now it's your time to feel the joy from Musicon, create
        your own playlist now!
      </Typography>
      <Button
        className={classes.button}
        onClick={handleOpenCreatePlaylistModal}
      >
        <AddIcon style={{ marginLeft: 5, marginRight: 5 }} />
        <Typography style={{ fontWeight: "bold" }}>Create Playlist</Typography>
      </Button>
      <CreatePlaylistModal />
    </div>
  );
};

export default WelcomeBanner;
