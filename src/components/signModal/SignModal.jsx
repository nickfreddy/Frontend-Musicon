import CstModal from "../commons/CstModal";
import { useDispatch } from "react-redux";
import React from 'react';
import { closeModalAuthAction } from "../../redux/actions/modalAction";
import { useSelector } from "react-redux";

const SignModal = () => {
  const dispatch = useDispatch()
  const {openAuthModal} = useSelector(state => state.modals)


  const handleClose =() => {
    dispatch(closeModalAuthAction());
  }
  return (
    <CstModal isOpen={openAuthModal} handleClose={handleClose}>
      Halo From Sign Modal
    </CstModal>
  )
}

export default SignModal
