import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ProfileSection from './ProfileSection';
import { Container, Divider, Typography } from '@material-ui/core';
import TopArtistSection from './TopArtistSection';
import TopSongSection from './TopSongSection';

const useStyles = makeStyles(theme => ({
  profileContainer:{
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  },

}))
const ProfilePage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.profileContainer}>
      <Typography className={`${classes.title}`} variant="h5">Profile</Typography>
      <ProfileSection photo="" fullName="I Gede Surya Adi Pranata"/>
      <Divider/>
      <Typography className={`${classes.title}`} variant="h5">Your Top Artis</Typography>
      <TopArtistSection/>
      <Divider/>
      <Typography className={`${classes.title}`} variant="h5">Your Top Song</Typography>
      <TopSongSection/>
    </Container>
  )
}

export default ProfilePage
