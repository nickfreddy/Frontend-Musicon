import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ProfileSection from './ProfileSection/ProfileSection';
import { Container, Divider, Typography } from '@material-ui/core';
import TopArtistSection from './TopArtistSection/TopArtistSection';
import TopSongSection from './TopSongSection/TopSongSection';
import { useSelector } from 'react-redux';

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
  const userData = useSelector(state => state.user.data)
  const classes = useStyles();
  return (
    <Container className={classes.profileContainer}>
      <Typography className={`${classes.title}`} variant="h5">Profile</Typography>
      <ProfileSection photo={userData.photo} fullName={userData.fullname}/>
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
