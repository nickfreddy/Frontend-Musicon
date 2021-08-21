import { Button, Typography } from '@material-ui/core'
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getLogedInUserAction } from '../redux/actions/userAction';


const LandingPage = ({isUserLoggedIn}) => {

  const history = useHistory();
  // const dispatch = useDispatch();


  // useEffect(()=> {
  //   dispatch(getLogedInUserAction(()=> history.push('/user')));
  // },[dispatch, history])
  if(isUserLoggedIn) return <Redirect to="/user"/>
  return (
    <div>
      <Typography>LANDING PAGE</Typography>
      <Button variant="contained" color="primary" onClick={() => history.push('/user')}>After Login Go To UserPage</Button>

    </div>
  )
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.user.isLoggedIn
})
export default connect(mapStateToProps)(LandingPage)
