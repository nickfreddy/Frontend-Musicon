import { makeStyles } from '@material-ui/core';
import React from 'react';
import ArtistCard from '../../../components/artistCard/ArtistCard';
import SampleArtistImage from '../../../assets/img/facebookProfile.jpg';


const useStyle = makeStyles(theme => ({
  root: {

  },
  topArtistContainer: {
    // flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(1),
    // [theme.breakpoints.up('md')]:{
    //   justifyContent: 'start'
    // },
    [theme.breakpoints.up('md')]:{
      // maxWidth: `calc(80vw - ${drawerWidth + theme.spacing(4)})`,
      maxWidth: '1050px',
    },
    // maxWidth: '1030px',
    marginBottom: theme.spacing(2),
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    margin: theme.spacing(0, 'auto')
  },
  artistCard: {
    display: 'inline-block',
    marginRight: theme.spacing(1)
    // [theme.breakpoints.up()]

  },
  artistList:{
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }


}))


const dummyData = [1, 2, 3, 4, 5, 6];



const TopArtistSection = () => {
  const classes = useStyle();

  const renderArtistCard = dummyData.map((data, index) => <ArtistCard key={index} className={classes.artistCard} artistImage={SampleArtistImage} artistName="Surya Adi" />)

  return (
    <div className={classes.root}>
      <div className={classes.topArtistContainer}>
        {renderArtistCard}
      </div>
    </div>
  )
}

export default TopArtistSection
