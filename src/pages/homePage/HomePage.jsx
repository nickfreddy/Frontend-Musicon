import { Container, Divider, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlaylistAction } from "../../redux/actions/userPlaylistAction";
import NewReleaseSong from "./homePageContent/NewReleaseSong";
import RecomendedSong from "./homePageContent/RecomendedSong";
import WelcomeBanner from "./homePageContent/WelcomeBanner";
import YourPlaylist from "./homePageContent/YourPlaylist";
import { getRecomendedSongAction } from "../../redux/actions/recomendedSongAction";
import { getNewReleaseSongAction } from "../../redux/actions/newReleaseSongAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userPlaylist = useSelector((state) => state.userPlaylist);

  useEffect(() => {
    dispatch(getUserPlaylistAction());
    dispatch(getRecomendedSongAction(12));
    dispatch(getNewReleaseSongAction(12));
  }, [dispatch]);
  return (
    <Container>
      {userPlaylist.data.length === 0 ? (
        <div>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginTop: 20 }}
          >
            Hi {user.data.fullname},
          </Typography>
          <WelcomeBanner />
        </div>
      ) : (
        <YourPlaylist />
      )}

      <Divider />
      <NewReleaseSong />
      <Divider />
      <RecomendedSong />
    </Container>
  );
};

// const mapStateToProps = (state) => ({
//   userPlaylist: state.userPlaylist
// })

export default HomePage;
