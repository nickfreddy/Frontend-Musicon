import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '0',//'136px',
    background: '#252836',

    bottom: 0,
    zIndex: theme.zIndex.drawer +1,
    position: 'fixed',
    borderTop: '1px solid #3C4156'
  }
}))
const Player = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Hi I am The Player
    </div>
  )
}

export default Player
