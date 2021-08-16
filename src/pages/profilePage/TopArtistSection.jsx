import { makeStyles } from '@material-ui/core';
import React from 'react';
import ArtistCard from '../../components/artistCard/ArtistCard';
import SampleArtistImage from '../../assets/img/facebookProfile.jpg';


const useStyle = makeStyles(theme => ({
  topArtistContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(1),
    [theme.breakpoints.up('md')]:{
      justifyContent: 'start'
    },
    marginBottom: theme.spacing(2)
  },
  artistCard:{
    // [theme.breakpoints.up()]
  }


}))


const dummyData = [1,2,3,4,5];



const TopArtistSection = () => {
  const classes = useStyle();

  const renderArtistCard = dummyData.map((data, index) => <ArtistCard key={index} className={classes.artistCard} artistImage={SampleArtistImage} artistName="Surya Adi"/>)
  return (
    <div className={classes.topArtistContainer}>
      {renderArtistCard}
    </div>
  )
}

export default TopArtistSection
