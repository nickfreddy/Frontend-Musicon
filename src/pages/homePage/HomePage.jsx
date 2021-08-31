import { CircularProgress, Container, Divider, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlaylistAction } from "../../redux/actions/userPlaylistAction";
import NewReleaseSong from "./homePageContent/NewReleaseSong";
import RecomendedSong from "./homePageContent/RecomendedSong";
import WelcomeBanner from "./homePageContent/WelcomeBanner";
import YourPlaylist from "./homePageContent/YourPlaylist";
import { getRecomendedSongAction } from "../../redux/actions/recomendedSongAction";
import { getNewReleaseSongAction } from "../../redux/actions/newReleaseSongAction";

const useStyles = makeStyles(theme => ({
  userPlaylistLoading: {
    height: '342px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userPlaylist = useSelector((state) => state.userPlaylist);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getUserPlaylistAction());
    dispatch(getRecomendedSongAction(12));
    dispatch(getNewReleaseSongAction(12));
  }, [dispatch]);

  const renderUserPlaylist = (playlistsReducer) => {
    if (playlistsReducer.loading) return (
      <div className={classes.userPlaylistLoading}>
        <CircularProgress />
      </div>
    );
    if (playlistsReducer.data.length === 0) return (
      <div>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginTop: 20 }}
        >
          Hi {user.data.fullname},
        </Typography>
        <WelcomeBanner />
      </div>
    )
    return <YourPlaylist />
  }

  return (
    <Container>
      {renderUserPlaylist(userPlaylist)}
      <Divider />
      <NewReleaseSong />
      <Divider />
      <RecomendedSong />
    </Container>
  );
};

export default HomePage;
