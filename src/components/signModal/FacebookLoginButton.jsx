import React from 'react'
import { CircularProgress, makeStyles } from "@material-ui/core";
// import { RoundedButton } from "../commons/CstButton";
import facebookIcon from '../../assets/img/logos_facebook.svg';
import FacebookLogin from 'react-facebook-login';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  logOutUserAction,
  postFacebookDataUserAction,
  setFacebookDataUserAction
} from '../../redux/actions/userAction';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  facebookLoginButton: {
    background: 'none',
    border: '1px solid #3C4156',
    borderRadius: '20px',
    width: '100%',
    position: 'relative',
    padding: theme.spacing(1.4),
    transition: 'all 0.5s ease',

    '&:focus':{
      outline: 0
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.8)',
      cursor: 'pointer',
      '& > .btn-text': {
        color: '#395185',
      }
    },
    '& img': {
      position: 'absolute',
      left: theme.spacing(1.3),
      bottom: theme.spacing(1.4),
      width: '17px'
    },
    '& .btn-text': {
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    '& .btn-progress': {
      position: 'absolute',
      right: theme.spacing(1.3),
      bottom: theme.spacing(1.1)
    }



  },
}))

const FacebookLoginButton = ({handleClose}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user)
  // const [login, setLogin] = useState(false);
  // const [data, setData] = useState({});
  // const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    // console.log(response);
    // setData(response);
    // setPicture(response.picture.data.url);
    if (response.accessToken) {
      // setLogin(true);
      dispatch(setFacebookDataUserAction(response)); //save the original response from facebook
      dispatch(postFacebookDataUserAction(response, () => {history.push('/user'); handleClose()}));

    } else {
      // setLogin(false);
      dispatch(logOutUserAction());
    }
  }
  return (

    <FacebookLogin
      buttonStyle={{}}
      cssClass={classes.facebookLoginButton}
      textButton={(
        <>
          <img src={facebookIcon} alt="..." />
          <span className='btn-text'>Login with Facebook</span>
          {user.facebookLoading &&
            <CircularProgress size={20} className='btn-progress' />
          }
        </>
      )}
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      callback={responseFacebook}
      fields="name, email, picture"
      scope="public_profile, email"
    />
  )
}

export default FacebookLoginButton
