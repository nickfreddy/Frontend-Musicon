import { Button, Typography } from '@material-ui/core'
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModalAuthAction } from '../redux/actions/modalAction';
import SignModal from '../components/signModal/SignModal';
const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpenAuthModal = () => {
    dispatch(openModalAuthAction());
  }
  return (
    <div>
      <Typography>LANDING PAGE</Typography>
      <Button variant="contained" color="primary" onClick={() => history.push('/user')}>After Login Go To UserPage</Button>
      {/** SURYA */}
      <Button variant="contained" color="primary" onClick={handleOpenAuthModal}>Open Auth Modal</Button>
      <SignModal/>
    </div>
  )
}

export default LandingPage
