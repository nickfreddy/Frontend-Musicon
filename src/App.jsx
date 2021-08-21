import React, {useEffect} from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import TestPage from './pages/TestPage';

import { useDispatch } from 'react-redux';
import { getLogedInUserAction } from './redux/actions/userAction';





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


  useEffect(()=> {
    dispatch(getLogedInUserAction());
  },[dispatch])
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
