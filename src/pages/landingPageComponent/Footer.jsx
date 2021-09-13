import React from 'react';
import { Typography, makeStyles, Container, IconButton } from '@material-ui/core';
import logoMusicon from '../../assets/img/Logo.svg';
import googlePlay from '../../assets/img/get-it-on-google-play.svg';
import playStore from '../../assets/img/available-on-the-app-store.svg';
import facebookWhite from '../../assets/img/facebookWhite.svg';
import instagramWhite from '../../assets/img/instagramWhite.svg';
import twitterWhite from '../../assets/img/twitterWhite.svg';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(theme => ({
  logo: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(0),
      paddingLeft: theme.spacing(1.5)
    }
  },
  aboutDetail: {
    background: "#252836",
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(10),
    textAlign: 'center',


    '& .brief-info': {
      '& .copyright':{
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]:{
        justifyContent: 'flex-start'
        },
      },
      '& .available': {
        '& img': {
          margin: theme.spacing(1)
        }
      }
    },

    '& .section': {
      '& h5': {
        fontWeight: 'bold',
        fontSize: '1.5em',
        color: '#92929D'
      },
      padding: '1em 0px',
      '& ul': {
        // margin: '1 0',
        padding: '1px 0px',
        '& li': {
          listStyle: 'none',
          margin: '1 0',
          padding: '0.5em 0'
        }
      }
    },


    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(1),

      display: 'flex',

      textAlign: 'left',
      '& .brief-info': {
        width: "32%",

        '& .available': {
          paddingTop: theme.spacing(2),
          '& img:first-child': {
            marginLeft: '0px'
          }
        }
      },
      '& .company': {
        width: "20%"

      },
      '& .community': {
        width: "20%"

      },
      '& .social-media': {
        width: "28%"
      },
      '& .section': {
        padding: '0px 0px'
      }
    },

  }

}))
const Footer = () => {
  const classes = useStyles();
  return (
    <Container id="about">
      <div className={classes.logo}>
        <img src={logoMusicon} alt="" />
      </div>

      <Container className={classes.aboutDetail}>
        <div className="brief-info">
          <Typography className="copyright">
            <CopyrightIcon style={{ marginRight: '0.3em' }} />
            Glints Academy
          </Typography>
          <div className="available section">
            <Typography variant="h5" componenet="h5">AVAILABLE ON</Typography>
            <div>
              <img src={googlePlay} alt="..." />
              <img src={playStore} alt="..." />
            </div>
          </div>
        </div>

        <div className="company section">
          <Typography variant="h5" componenet="h5">COMPANY</Typography>
          <ul>
            <li><Typography>About</Typography></li>
            <li><Typography>Career</Typography></li>
          </ul>
        </div>

        <div className="community section">
          <Typography variant="h5" componenet="h5">COMMUNITY</Typography>
          <ul>
            <li><Typography>Ads</Typography></li>
            <li><Typography>For Artist</Typography></li>
            <li><Typography>Vendors</Typography></li>
          </ul>
        </div>

        <div className="social-media section">
          <Typography variant="h5" componenet="h5">FOLLOW US ON SOCIAL MEDIA</Typography>
          <div>
            <IconButton><img src={twitterWhite} alt="..." /></IconButton>
            <IconButton><img src={facebookWhite} alt="..." /></IconButton>
            <IconButton><img src={instagramWhite} alt="..." /></IconButton>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Footer
