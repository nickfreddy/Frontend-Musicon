import React from 'react'
import { CircularProgress, makeStyles } from "@material-ui/core";
import { RoundedButton } from "../commons/CstButton";
import googleIcon from '../../assets/img/grommet-icons_google.svg'
import { useGoogleLogin } from "react-google-login";
import {
  useDispatch, 
  useSelector,
} from 'react-redux';
import { postGoogleDataUserAction, setGoogleDataUserAction } from '../../redux/actions/userAction';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
  socialButton: {
    position: 'relative',
    marginBottom: theme.spacing(2),
    transition: 'all 0.5s ease',
    '& .MuiButton-label': {
      color: 'white',
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    '& .MuiButton-startIcon': {
      position: 'absolute',
      left: theme.spacing(2),
      width: '17px'
    },
    '& .MuiButton-endIcon': {
      position: 'absolute',
      right: theme.spacing(2),
      // width: '17px'
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.8)',
      '& .MuiButton-label': {
        color: 'black'
      }
    }
  },
}))



const GoogleLoginButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const classes = useStyles();

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const onSuccess = (res) => {
    // console.log('LOGIN SUCCESS, CURRENT USER', res.profileObj)
    //SAVE USER DATA FROM GOOGLE TO REDUCER
    dispatch(setGoogleDataUserAction(res.profileObj))
    //POST DATA TO SERVER
    dispatch(postGoogleDataUserAction(res.profileObj, () => history.push('/user')))

  }

  const onFailure = (res) => {
    // console.log('LOGIN FAILED RES', res);
    //do something
  }

  const loginWithGoogle = useGoogleLogin({
    // isSignedIn: false,
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: "offline"
  })

  return (
    <>
      <RoundedButton onClick={() => loginWithGoogle.signIn()} className={classes.socialButton} startIcon={<img src={googleIcon} alt="" />} endIcon={user.googleLoading && <CircularProgress size={20} />} fullWidth variant="transparent">Login with Google</RoundedButton>
    </>
  )
}

export default GoogleLoginButton

