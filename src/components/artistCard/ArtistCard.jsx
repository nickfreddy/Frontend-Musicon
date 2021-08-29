import { Avatar, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root:{
    background: '#1F1D2B',
    width: "200px",
  },
  cardContent: {
    textAlign: 'center'
  },
  artistAvatar: {
    margin: theme.spacing(0, 'auto'),
    width:  '160px',
    height: '160px',
    marginBottom: theme.spacing(1.5)
  }
}))

const ArtistCard = ({artistImage, artistName, className}) => {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} ${className}`}>
      <CardContent className={classes.cardContent}>
        <Avatar className={classes.artistAvatar} alt="artistAvatar" src={artistImage}/>
        <Typography variant="h6">{artistName}</Typography>
      </CardContent>
    </Card>
  )
}

export default ArtistCard
