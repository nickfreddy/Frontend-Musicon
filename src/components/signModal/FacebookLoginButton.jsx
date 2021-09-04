import React from 'react'
import { makeStyles } from "@material-ui/core";
// import { RoundedButton } from "../commons/CstButton";
import facebookIcon from '../../assets/img/logos_facebook.svg';
import FacebookLogin from 'react-facebook-login';
const useStyles = makeStyles(theme => ({
  facebookLoginButton: {
    background: 'none',
    border: '1px solid #3C4156',
    borderRadius: '20px',
    width: '100%',
    position: 'relative',
    padding: theme.spacing(1.4),
    transition: 'all 0.5s ease',
    '&:hover':{
      background: 'rgba(255, 255, 255, 0.8)',
      cursor: 'pointer',
      '& > .btn-text':{
        color: '#395185',
      }
    },
    '& img':{
      position: 'absolute',
      left: theme.spacing(1.3),
      width: '17px'
    },
    '& .btn-text':{
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold'
    }



  },
}))

const FacebookLoginButton = () => {
  const classes = useStyles();
  // const [login, setLogin] = useState(false);
  // const [data, setData] = useState({});
  // const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    // setData(response);
    // setPicture(response.picture.data.url);
    if (response.accessToken) {
      // setLogin(true);
    } else {
      // setLogin(false);
    }
  }
  return (

    <FacebookLogin
      buttonStyle={{}}
      cssClass={classes.facebookLoginButton}
      textButton={(
        <>
          <img src={facebookIcon} alt="..."/>
          <span className='btn-text'>Login with Facebook</span>
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
