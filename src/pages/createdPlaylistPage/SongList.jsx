import { Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'

const SongList = () => {
  const {playlist_id} = useParams()
  return (
    <div>
      <Typography variant="h4">SONG LIST PAGE : {playlist_id}</Typography>
    </div>
  )
}

export default SongList
