import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

const CreatedPlaylistPage = () => {
  const history = useHistory();
  const {url} = useRouteMatch();
  return (
    <div>
      <Typography variant="h4">CREATED PLAYLIST PAGE</Typography>
      <Button variant="contained" color="primary" onClick={() => history.push(`${url}/123`)}>Goto Song List</Button>
    </div>
  )
}

export default CreatedPlaylistPage
