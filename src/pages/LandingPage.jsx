// import { Button, Typography } from '@material-ui/core'
import React from 'react';
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './landingPageComponent/NavBar';
import Hero from './landingPageComponent/Hero';
import Footer from './landingPageComponent/Footer';

const LandingPage = ({isUserLoggedIn}) => {

  // const history = useHistory();

  if(isUserLoggedIn) return <Redirect to="/user"/>
  // if(isUserLoggedIn) return <Redirect to="/spotifyLogin"/>
  // if(isUserLoggedIn) return <Redirect to="https://musicon.gabatch13.my.id/auth/spotify/login"/>

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.user.isLoggedIn
})
export default connect(mapStateToProps)(LandingPage)
