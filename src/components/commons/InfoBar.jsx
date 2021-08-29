import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root:{
    background: theme.palette.success.main,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: theme.spacing(0.5)
  },
  startIcon:{
    marginRight: theme.spacing(1)
  },
  infoError:{
    background: theme.palette.error.main
  }
}))
const InfoBar = ({open = false, error = true, startIcon, children}) => {
  const classes = useStyles();
  if(open) return (
    <div className={`${classes.root} ${error && classes.infoError}`}>
      {startIcon &&
      <div className={classes.startIcon}>
        {startIcon}
      </div>
      }
      {children}
    </div>
  );
  return null
}

export default InfoBar
