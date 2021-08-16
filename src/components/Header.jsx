import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root:{
    width: '100%',
    height: theme.spacing(4),
    background: 'blue'
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      Header
    </div>
  )
}

export default Header
