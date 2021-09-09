import { Container, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import ChangePasswordForm from './ChangePasswordForm';
import useLocalStorage from '../../functions/useLocalStorage';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "758px",
    borderRadius: "8px",
    padding: '24px 24px 12px',
    // minHeight: '100vh',
    marginTop: '-15px',
    [theme.breakpoints.up('sm')]: {
      background: "#1F1D2B",
      minHeight: 'initial',
      marginTop: theme.spacing(0)
    },
    '& > .MuiTypography-root': {
      marginBottom: theme.spacing(2)
    },
  },
  infoBanner: {
    margin: theme.spacing(0, 0, 3),
    height: '80px',
    padding: theme.spacing(1),
    background: theme.palette.info.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',

    [theme.breakpoints.up('sm')]: {
      // margin: theme.spacing(0, 0, 1),
    },
    '& .iconInfo': {
      marginRight: theme.spacing(1),
      height: theme.spacing(5),
      width: theme.spacing(5)
    }

  }
}));
const AccountPage = () => {
  const classes = useStyles();
  const [disablePasswordChange, setDisablePasswordChange] = useState(false);
  const appLocalStorage = useLocalStorage();
  const loginMethod = appLocalStorage.getLoginMethod();
  // console.log('INI LOGIN METHODNYA', loginMethod);


  useEffect(() => {
    if (loginMethod !== "normal") {
      setDisablePasswordChange(true)
    }
  }, [loginMethod])

  return (
    <div>
      <Container className={classes.root}>
        {disablePasswordChange &&
          <div className={classes.infoBanner}>
            <InfoIcon className="iconInfo" />
            <Typography>Change password is not available because you log in using {loginMethod} method</Typography>
          </div>
        }
        <Typography gutterBottom variant="h5">Change Password</Typography>
        <ChangePasswordForm disabled={disablePasswordChange} />

      </Container>
    </div>
  )
}

export default AccountPage
