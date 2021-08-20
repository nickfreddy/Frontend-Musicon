import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ChangePasswordForm from './ChangePasswordForm';
const useStyles = makeStyles(theme => ({
  root:{
    background: "#1F1D2B",
    maxWidth: "758px",
    borderRadius: "8px",
    padding: '24px',
    minHeight: '100vh',
    marginTop: '-80px',
    [theme.breakpoints.up('sm')]:{
      minHeight: 'initial',
      marginTop: '0px'
    },
    '& > .MuiTypography-root':{
      marginBottom: theme.spacing(2)
    }
  }
}));
const AccountPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <Typography gutterBottom variant="h5">Change Password</Typography>
        <ChangePasswordForm/>
      </Container>
    </div>
  )
}

export default AccountPage
