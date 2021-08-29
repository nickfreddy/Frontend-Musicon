// import { Button, Typography } from '@material-ui/core'
import React from 'react';
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './landingPageComponent/NavBar';
import Hero from './landingPageComponent/Hero';
import Footer from './landingPageComponent/Footer';
import SignModal from '../components/signModal/SignModal';
import { useDispatch } from 'react-redux';
import { openModalAuthAction } from '../redux/actions/modalAction';

const LandingPage = ({isUserLoggedIn}) => {
  const dispatch = useDispatch();

  // const history = useHistory();

  if(isUserLoggedIn) return <Redirect to="/user"/>
  // if(isUserLoggedIn) return <Redirect to="/spotifyLogin"/>
  // if(isUserLoggedIn) return <Redirect to="https://musicon.gabatch13.my.id/auth/spotify/login"/>

  const handleOpenAuthModal = () => {
    dispatch(openModalAuthAction());
  }
  return (
    <div>
      <NavBar handleOpenAuthModal={handleOpenAuthModal}/>
      <Hero handleOpenAuthModal={handleOpenAuthModal}/>
      <Footer/>
      <SignModal />

    </div>
  )
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.user.isLoggedIn
})
export default connect(mapStateToProps)(LandingPage)
