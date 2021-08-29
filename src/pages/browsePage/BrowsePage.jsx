import { Container, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import BrowseAlbums from "./browsePageComponent/BrowseAlbums";
import BrowseArtists from "./browsePageComponent/BrowseArtists";
import BrowseSongs from "./browsePageComponent/BrowseSongs";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BrowsePage = () => {
  const query = useQuery();
  const pattern = query.get("pattern");

  return (
    // <div>
    //   <Typography>BROWSE PAGE : {pattern}</Typography>
    //   <BrowseSongs pattern={pattern} />
    //   <BrowseAlbums pattern={pattern} />
    //   <BrowseArtists pattern={pattern} />
    // </div>
    <Container>
      <Typography variant="h4" style={{ fontWeight: "bolder", margin: 10 }}>
        Songs
      </Typography>
      <BrowseSongs pattern={pattern} />
      <Divider/>
      <Typography variant="h4" style={{ fontWeight: "bolder", margin: 10 }}>
        Albums
      </Typography>
      <BrowseAlbums pattern={pattern} />
      <Divider/>
      <Typography variant="h4" style={{ fontWeight: "bolder", margin: 10 }}>
        Artists
      </Typography>
      <BrowseArtists pattern={pattern} />
    </Container>
  );
};

export default BrowsePage;
