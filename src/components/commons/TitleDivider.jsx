import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  titles: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      whiteSpace: 'nowrap'
    },
    '& span': {
      width: '100%',
      display: 'inline-block',
      backgroundColor: "#3C4156",
      height: '1px',
      borderRadius: '1px'
    }
  }
}))
const TitleDivider = ({className, children}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.titles} ${className}`}>
      <span></span>
      <Typography>
        {children}
      </Typography>
      <span></span>
    </div>
  )
}

export default TitleDivider
