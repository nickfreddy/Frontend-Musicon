import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    // width: theme.spacing(6),
    height: '100vh',
    float: 'left',
    background: 'red',
    //Temporary Style can be deleted
    width: '0px',
    overflow: 'hidden'
    //==============================
  }
}))

const CstDrawer = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const classes = useStyles()
  return (
    <div className={classes.root}>
      Drawer
      <div>
        <Button variant="contained" color="primary" onClick={() => history.push(`${url}`)}>Home</Button>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={() => history.push(`${url}/playlist`)}>Playlist</Button>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={() => history.push(`${url}/createdPlaylist`)}>Created Playlist</Button>
      </div>
    </div>
  )
}

export default CstDrawer
