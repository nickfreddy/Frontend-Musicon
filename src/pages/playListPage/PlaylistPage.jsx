import { 
  Typography, 
  Container, 
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
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
    </Container>
  );
};

export default PlaylistPage;
