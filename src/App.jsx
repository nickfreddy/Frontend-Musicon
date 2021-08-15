import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import TestPage from './pages/TestPage';






const App = ({ theme }) => {
  // const dispatch = useDispatch()
  // const {loading} = useSelector(state => state.movies);
  // console.log(loading);

  const rootTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        light: "#BFBFBF",
        main: "#FFFFFF",
        dark: "#808080"
      },
      // secondary: {
      //   light: "#EB507F",
      //   main: "#FE024E",
      //   dark: "#7C2326"
      // }
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

  useEffect(() => {

  }, [])

  return (
    <Router>
      <ThemeProvider theme={rootTheme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={() => (<LandingPage />)} /> {/**Loading page */}
          <Route path="/user" component={() => (<UserPage />)} />
          <Route path="/test" component={() => (<TestPage />)} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  theme: state.theme
})
export default connect(mapStateToProps)(App)
