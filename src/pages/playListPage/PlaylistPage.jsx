import { Button, Typography } from '@material-ui/core'
import React from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';

const PlaylistPage = () => {
  const params = useParams();
  const history = useHistory();
  const {url} = useRouteMatch()
  return (
    <div>
      <Typography variant="h4">PLAYLIST PAGE {params.topicId}</Typography>
      <Button variant="contained" color="primary" onClick={() => history.push(`${url}/12344`)}>Go to Detail Playlist Page</Button>
    </div>
  )
}

export default PlaylistPage
