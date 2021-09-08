import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root:{
    height: '5px',
    width: '5px',
    borderRadius: '50%',
    background: '#0065DA',
    margin: theme.spacing(0, 1),
  }
}))

const DotSpacer = ({className}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`}>
    </div>
  )
}

export default DotSpacer
