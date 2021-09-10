import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import halfCircleImage from '../../assets/img/halfcircle2.svg';
import heroImage from '../../assets/img/HeroImage.svg';
import { RoundedButton } from '../../components/commons/CstButton';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(90deg, #0065DA, #4399FD)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column-reverse',
    // justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    // gridTemplateColumns: '1fr 1fr',

    '& .side': {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
    },

    '& .left-side': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(5, 3, 5),
      '& .hero-text': {
        [theme.breakpoints.up('md')]: {
          maxWidth: '420px',
        },
        '& h2': {
          fontSize: '3em',
          fontFamily: 'Poppins',
          marginBottom: theme.spacing(2),
          lineHeight: '1.2em',
          // padding: '0 1em',

          [theme.breakpoints.up('sm')]: {
            fontSize: '5em',
          },
          [theme.breakpoints.up('md')]: {
            lineHeight: '1.3em',

          }
        },
        '& p': {
          fontSize: '1.4em',
          marginBottom: theme.spacing(3)
        },
        '& button': {
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '1.4em',

        }
      }
    },
    '& .right-side': {
      // position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      textAlign: 'center',
      '& .hero-image': {
        width: '70%',
        marginTop: '30%',
        // marginLeft: '10%'
      },

      [theme.breakpoints.up('sm')]: {
        '& .hero-image': {
          // width: '70%',
          marginTop: '15%',
          // marginLeft: '10%'
        },
      },

      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${halfCircleImage})`,
        backgroundPosition: 'center left',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        '& .hero-image': {
          marginTop: "0",
          width: '50%',
          marginLeft: '10%'
        }
      }
      // zIndex: 1
      // backgroundSize: 'contain'

      // '& .half-circular': {
      //   position: 'absolute',
      //   background: 'gray',
      //   borderRadius: '50% 0 0 50%',
      //   right: '-40vw',
      //   top: '-70vh',
      //   height: '240vh',
      //   width: '180%',
      //   // zIndex: -1
      // }
    },
  }
}))

const Hero = ({ handleOpenAuthModal }) => {
  const classes = useStyles();
  return (
    <div id="home" className={classes.root}>
      <div className="side left-side">
        <div className="hero-text">
          <Typography variant="h2" component="h2">Listening to The Music</Typography>
          <Typography variant="subtitle1" component="p">
            Musicon is a simple music player app, just a few button clicks away to discover songs you like. It has highly-customizable playlist features. Discover other's playlists and rate them or publish your playlists for the world to show your good taste in music.
          </Typography>
          <RoundedButton onClick={handleOpenAuthModal} variant="gold">Start Now</RoundedButton>

        </div>
      </div>
      <div className="side right-side">
        <img className="hero-image" src={heroImage} alt="..." />
      </div>
    </div>
  )
}

export default Hero
