import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";

const useStyles = makeStyles((theme) => ({
  cardwrapper: {
    margin: [[10, 10, 60, 10]],
  },
  card: {
    background: "#1F1D2B",
    borderRadius: "8px",
    maxWidth: 200,
    height: 200,
  },
  media: {
    margin: 20,
    borderRadius: "8px",
    width: 160,
    height: 160,
  },
  actionarea: {
    borderRadius: "8px",
    width: 200,
  },
  title: {
    width: 200,
  },
  bullet: {
    marginLeft: 5,
    color: "#C4C4C4",
  },
  textbox: {
    marginTop: 20,
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
  playlistUrl,
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
      <Card className={classes.card}>
        <CardActionArea
          className={classes.actionarea}
          onClick={() => history.push(`${url}/${playlistUrl}`)}
        >
          <CardMedia
            className={classes.media}
            image={playlistImage}
            title={playlistTitle}
          />
        </CardActionArea>
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
