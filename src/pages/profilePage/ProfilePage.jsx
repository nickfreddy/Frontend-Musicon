import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ProfileSection from './ProfileSection/ProfileSection';
import { Container, Divider, Typography } from '@material-ui/core';
import TopArtistSection from './TopArtistSection/TopArtistSection';
import TopSongSection from './TopSongSection/TopSongSection';
import { connect } from 'react-redux';

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
const ProfilePage = ({userData}) => {
  // const userData = useSelector(state => state.user.data)
  const classes = useStyles();
  return (
    <Container className={classes.profileContainer}>
      <Typography className={`${classes.title}`} variant="h5">Profile</Typography>
      <ProfileSection photo={userData.photo} fullName={userData.fullname} createdPlaylist={userData.playlistCreated}/>
      <Divider/>
      <Typography className={`${classes.title}`} variant="h5">Your Top Artists</Typography>
      <TopArtistSection/>
      <Divider/>
      <Typography className={`${classes.title}`} variant="h5">Your Top Songs</Typography>
      <TopSongSection/>
    </Container>
  )
}


const mapStateToProps = (state) => ({
  userData: state.user.data
})
export default connect(mapStateToProps)(ProfilePage)
