import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  linedText: {
    display: 'flex',
    // padding: theme.spacing(0, 3),
    alignItems: 'center',
    '& .line': {
      height: '3px',
      background: 'white',
      width: '100%',
      borderRadius: '8px'
    },
    '& .line-left': {
      marginRight: theme.spacing(2)
    },
    '& .line-right': {
      marginLeft: theme.spacing(2)
    },
    '& .MuiTypography-root': {
      whiteSpace: "nowrap",
    }
  },
}))
const LinedText = ({ text, lineLeft = true, lineRight = true }) => {
  const classes = useStyles()
  return (
    <div className={classes.linedText}>
      {lineLeft && <span className="line line-left"></span>}
      <Typography align="right" variant="h5">{text}</Typography>
      {lineRight && <span className="line line-right"></span>}
    </div>
  )
}

export default LinedText
