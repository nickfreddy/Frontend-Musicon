import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistAlbumAction } from "../../redux/actions/artistAlbumAction";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles, Container, Typography, Divider } from "@material-ui/core";
import BrowseAlbumCard from "../browsePage/browsePageComponent/BrowseAlbumCard";

const useStyles = makeStyles((theme) => ({
  artistImage: {
    maxWidth: 250,
    maxHeight: 250,
  },
}));

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { artist_id } = useParams();
  const artistAlbum = useSelector((state) => state.artistAlbum);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getArtistAlbumAction(artist_id));
  }, [artist_id, dispatch]);

  return (
    <div>
      <Container>
        <div
          className="artist-header"
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <img
            className={classes.artistImage}
            alt="the-artist"
            src={artistAlbum.data.photo}
          />
          <div>
            <Typography
              variant="h1"
              style={{ fontWeight: "bolder", marginLeft: 20, marginBottom: 20 }}
            >
              {artistAlbum.data.name}
            </Typography>
            <Typography
              variant="h4"
              style={{ marginLeft: 20, marginBottom: 20 }}
            >
              {artistAlbum.data.albums?.length} Album
            </Typography>
          </div>
        </div>
        <Divider />
        <div style={{ display: "flex", marginTop: 20 }}>
          {artistAlbum.data.albums?.map((item, index) => (
            <div
              key={index}
              onClick={() => history.push(`/user/browse/album/${item._id}`)}
            >
              <BrowseAlbumCard
                albumImage={item.albumImage}
                albumTitle={item.albumTitle}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ArtistPage;
