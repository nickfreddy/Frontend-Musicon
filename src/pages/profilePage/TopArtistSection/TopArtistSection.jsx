import { makeStyles, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import ArtistCard from '../../../components/artistCard/ArtistCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTopArtistAction } from '../../../redux/actions/userTopArtistAction';
import { Skeleton } from '@material-ui/lab';


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
  },
  skeleteonTopArtist:{
    display: 'inline-block',
    marginRight: theme.spacing(1),
    borderRadius: theme.spacing(0.5)
  },
  noData:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const dummyData = [1, 2, 3, 4, 5, 6];

const TopArtistSection = () => {
  const dispatch = useDispatch();
  const userTopArtist = useSelector(state => state.userTopArtist);
  const classes = useStyle();

  // const renderArtistCard = dummyData.map((data, index) => <ArtistCard key={index} className={classes.artistCard} artistImage={SampleArtistImage} artistName="Surya Adi" />)


  const renderTopArtist = () => {
    if(userTopArtist.loading) return dummyData.map((data, index) => (
      <Skeleton className={classes.skeleteonTopArtist} key={index} variant="rect" width="200px" height="245px"/>
    ))
    if(userTopArtist.data.length === 0 ) return (
      <div className={classes.noData}>
        <Typography>You have no top artist yet</Typography>
      </div>
    );
    return userTopArtist.data.map(artist => (
      <ArtistCard key={artist._id} artist={artist} className={classes.artistCard} artistImage={artist.photo} artistName={artist.name} />
    ))
  }



  useEffect(()=>{
    dispatch(getUserTopArtistAction(1,10));
  },[dispatch])

  return (
    <div className={classes.root}>
      <div className={classes.topArtistContainer}>
        {/* {renderArtistCard} */}
        {renderTopArtist()}
      </div>
    </div>
  )
}

export default TopArtistSection
