import { Button, Typography, Container, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams, useRouteMatch } from "react-router";
import PlaylistItems from "./PlaylistItems";

const PlaylistPage = () => {
  const params = useParams();
  // const history = useHistory();
  // const { url } = useRouteMatch();
  return (
    <Container>
      <Typography
        variant="h4"
        style={{ fontWeight: "bolder", marginLeft: 10, marginBottom: 20 }}
      >
        Playlist {params.topicId}
      </Typography>
      <PlaylistItems />

      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(`${url}/12344`)}
        style={{ marginRight: "2rem" }}
      >
        Go to Detail Playlist Page
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(`${url}/12345`)}
      >
        Go to Detail Playlist Page
      </Button> */}
    </Container>
  );
};

export default PlaylistPage;
