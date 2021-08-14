import { Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'

const DetailPlaylist = () => {
  const params = useParams();
  const {playlist_id} = params;
  return (
    <div>
      <Typography variant="h4">DETAIL PLAYLIST : {playlist_id}</Typography>
    </div>
  )
}

export default DetailPlaylist
