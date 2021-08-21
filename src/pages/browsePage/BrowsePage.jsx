import { Typography } from '@material-ui/core';
import React from 'react'
import { useLocation } from 'react-router';
import BrowseAlbums from './browsePageComponent/BrowseAlbums';
import BrowseArtists from './browsePageComponent/BrowseArtists';
import BrowseSongs from './browsePageComponent/BrowseSongs';



function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BrowsePage = () => {
  const query = useQuery()
  const pattern = query.get("pattern")

  return (
    <div>
      <Typography>BROWSE PAGE : {pattern}</Typography>
      <BrowseSongs pattern={pattern} />
      <BrowseAlbums pattern={pattern} />
      <BrowseArtists pattern={pattern} />
    </div>
  )
}

export default BrowsePage
