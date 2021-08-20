import { Button, Typography } from '@material-ui/core'
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLogedInUserAction } from '../redux/actions/userAction';


const LandingPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(getLogedInUserAction(()=> history.push('/user')));
  },[dispatch, history])
  return (
    <div>
      <Typography>LANDING PAGE</Typography>
      <Button variant="contained" color="primary" onClick={() => history.push('/user')}>After Login Go To UserPage</Button>

    </div>
  )
}

export default LandingPage
