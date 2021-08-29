import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import TestPage from './pages/TestPage';
import { useDispatch } from 'react-redux';
import { getLogedInUserAction } from './redux/actions/userAction';
// import { AUTH_SPOTIFY_URL } from './redux/Api/spotifyAPI';

// import axios from 'axios';
// import { CLIENT_ID,CLIENT_SECRET } from './redux/Api/spotifyAPI';

// var SpotifyWebApi = require('spotify-web-api-node');

// var spotifyApi = new SpotifyWebApi({
//   clientId: CLIENT_ID,
//   clientSecret: CLIENT_SECRET,
//   // redirectUri: 'http://www.example.com/callback'
// });



const App = ({ theme }) => {
  // const {loading} = useSelector(state => state.movies);
  // console.log(loading);
  const themeType = 'dark';
  const rootTheme = createTheme({
    palette: {
      type: themeType,
      primary: {
        light: "#BFBFBF",
        main: "#FFFFFF",
        dark: "#808080"
      },
      background: {
        default: themeType === 'dark' ? "#252836" : "#fafafa",
      },
      // secondary: {
      //   light: "#EB507F",
      //   main: "#FE024E",
      //   dark: "#7C2326"
      // }
    },
    typography: {
      fontFamily: [
        'DM Sans',
        'sans-serif',
        'Poppins'
        // '"Helvetica Neue"',
        // 'Roboto',
        // 'Arial',
        // 'sans-serif',
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
      ].join(',')
    },
    overrides: {
      // MuiTextField: {
      //   root: {
      //     '& .MuiOutlinedInput-root': {
      //       background: '#3C4156'
      //     },
      //     // '& .Mui-focused':{
      //     //   '& .MuiOutlinedInput-notchedOutline':{
      //     //     borderColor: 'gray'
      //     //   }
      //     // }
      //   }
      // }

    }
  })
  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(getLogedInUserAction());
  }, [dispatch])
  return (
    <Router>
      <ThemeProvider theme={rootTheme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={() => (<LandingPage />)} /> {/**Loading page */}
          <Route path="/user" component={() => (<UserPage />)} />
          <Route path="/test" component={() => (<TestPage />)} />



          {/**=========== USED TO GET SPOTIFY CODE ========== */}
          {/* <Route path="/spotifyLogin" component={() => { //redirect to spotify auth URL and then back to localhost:300/user
            window.location.href = AUTH_SPOTIFY_URL;
            // window.location.href= "https://musicon.gabatch13.my.id/auth/spotify/login"
            return null;
          }} /> */}
          {/**=============================================== */}

        </Switch>
      </ThemeProvider>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  theme: state.theme
})
export default connect(mapStateToProps)(App)
