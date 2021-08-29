import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: [[5, 5, 5, 5]],
    background: "#1F1D2B",
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: 220,
      height: 260,
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 240,
    },
  },
  media: {
    margin: [[20, 20, 0, 20]],
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: 180,
      height: 180,
    },
    [theme.breakpoints.up("md")]: {
      width: 160,
      height: 160,
    },
  },
  actionarea: {
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: 220,
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  titletext: {
    margin: "auto",
    fontWeight: "bold",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const BrowseAlbumCard = ({ albumImage, albumTitle, albumUrl }) => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.actionarea}
        onClick={() => history.push(`${url}/${albumUrl}`)}
      >
        <CardMedia
          className={classes.media}
          image={albumImage}
          title={albumTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" className={classes.titletext}>
            {albumTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BrowseAlbumCard;
