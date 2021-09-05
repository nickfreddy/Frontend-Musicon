import CstModal from "../commons/CstModal";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { closeModalAuthAction } from "../../redux/actions/modalAction";
import { useSelector } from "react-redux";
import { Container, Typography, makeStyles } from "@material-ui/core";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import TitleDivider from "../commons/TitleDivider";
// import { RoundedButton } from "../commons/CstButton";
// import googleIcon from '../../assets/img/grommet-icons_google.svg'
// import facebookIcon from '../../assets/img/logos_facebook.svg'
import { closeInfoLoginModalAction, closeRegisterInfoAction } from "../../redux/actions/userAction";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";


const useStyles = makeStyles(theme => ({
  formContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5)
  },
  socialButton:{
    position: 'relative',
    marginBottom: theme.spacing(2),
    '& .MuiButton-startIcon':{
      position: 'absolute',
      left: theme.spacing(2)
    }
  },
  divider:{
    marginBottom: theme.spacing(3)
  },
  switchSign:{
    marginBottom: theme.spacing(3),
    '& span':{
      fontWeight: theme.typography.fontWeightBold,
      '&:hover':{
        cursor: 'pointer'
      }
    }
  }
}))

const SignModal = () => {
  const dispatch = useDispatch()
  const { openAuthModal } = useSelector(state => state.modals);
  const [showSignUp, setShowSignUp] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    dispatch(closeModalAuthAction());
    dispatch(closeRegisterInfoAction());
    dispatch(closeInfoLoginModalAction());
  }
  const handleShowSignUp = () => {
    setShowSignUp(true);
    dispatch(closeInfoLoginModalAction());
  }

  const handleShowSignIn = () => {
    setShowSignUp(false);
    dispatch(closeRegisterInfoAction());
  }
  return (
    <CstModal isOpen={openAuthModal} handleClose={handleClose}>
      <Container className={classes.formContainer}>
        {showSignUp ? <SignUpForm handleClose={handleClose} /> : <SignInForm handleClose={handleClose}/>}

        {!showSignUp ? 
        <Typography className={classes.switchSign} align="center" variant="body1" onClick={handleShowSignUp}>Don't have an account ? <span>Sign Up Here</span></Typography>
        :
        <Typography className={classes.switchSign} align="center" variant="body1" onClick={handleShowSignIn}>Already have an account ? <span>Sign In Here</span></Typography>
        }

        <TitleDivider className={classes.divider}>OR</TitleDivider>
        <GoogleLoginButton/>
        <FacebookLoginButton/>
        {/* <RoundedButton className={classes.socialButton} startIcon={<img src={googleIcon} alt=""/>} fullWidth variant="transparent">Google</RoundedButton> */}
        {/* <RoundedButton className={classes.socialButton} startIcon={<img src={facebookIcon} alt=""/>} fullWidth variant="transparent">Facebook</RoundedButton> */}
      </Container>
    </CstModal>
  )
}

export default SignModal
