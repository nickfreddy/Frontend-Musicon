import CstModal from "../commons/CstModal";
import { useDispatch } from "react-redux";
import React, {useState} from 'react';
import { closeModalAuthAction } from "../../redux/actions/modalAction";
import { useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const SignModal = () => {
  const dispatch = useDispatch()
  const {openAuthModal} = useSelector(state => state.modals);
  const [showSignUp, setShowSignUp] = useState(false);


  const handleClose =() => {
    dispatch(closeModalAuthAction());
  }
  const handleShowSignUp = () =>{
    setShowSignUp(true)
  }
  return (
    <CstModal isOpen={openAuthModal} handleClose={handleClose}>
      <Container>
        {showSignUp ? <SignUpForm/> : <SignInForm/>}
        <Typography variant="body1" onCLick={handleShowSignUp}></Typography>
        
      </Container>
    </CstModal>
  )
}

export default SignModal
