import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  Card,
  // CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
  alpha,
} from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";

const useStyles = makeStyles((theme) => ({
  cardwrapper: {
    margin: [[8, 8, 30, 8]],

  },
  card: {
    background: "#1F1D2B",
    borderRadius: "8px",
    width: '246px',
    height: '246px',
    transition: 'all 0.2s linear',
    '&:hover':{
      background: '#4399FD',      //'#0065DA',
      cursor: 'pointer',
      transform: 'rotate(-1deg) scale(1.03)',

    }
  },
  media: {
    margin: '24px auto',
    borderRadius: "8px",
    width: '200px',
    height: '200px',
    boxShadow: `0px 0px 15px ${alpha('#000000', 0.5)}`,
    transition: 'all 0.3s linear',
    '&:hover':{
      transform: 'rotate(2deg) scale(1.1)',
    }
  },
  actionarea: {
    borderRadius: "8px",
    // width: 246,
    '&:hover':{
      transition: 'all 1s ease',
      background: "blue"
    }
  },
  title: {
    width: 200,
  },
  bullet: {
    marginLeft: 5,
    color: "#C4C4C4",
  },
  textbox: {
    marginTop: 10,
    width: 200,
  },
  titletext: {
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    display: "flex",
  },
  usertext: {
    width: "70%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  ratingstar: {
    color: "#4399FD",
    marginLeft: 5,
    marginRight: 5,
  },
}));

const PlaylistCard = ({
  playlistImage,
  playlistMaker,
  playlistTitle,
  playlistId,
  ratingValue,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    // <Card className={`${classes.root} ${className}`}>
    //   <CardContent className={classes.cardContent}>
    //     <Avatar className={classes.artistAvatar} alt="artistAvatar" src={artistImage}/>
    //     <Typography variant="h6">{artistName}</Typography>
    //   </CardContent>
    // </Card>

    <div className={`${classes.cardwrapper}`}>
      <Card className={classes.card} onClick={() => history.push(`${url}/${playlistId}`)}>
        <div>
          <CardMedia
            className={classes.media}
            image={playlistImage}
            title={playlistTitle}
          />
        </div>
      </Card>
      <div className={classes.textbox}>
        <Typography gutterBottom variant="h6" className={classes.titletext}>
          {playlistTitle}
        </Typography>
        <div className={classes.description}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.usertext}
          >
            By {playlistMaker}
          </Typography>
          <div className={classes.rating}>
            {bull}
            <StarRateIcon className={classes.ratingstar} />
            <Typography variant="body2" color="textSecondary">
              {ratingValue}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
