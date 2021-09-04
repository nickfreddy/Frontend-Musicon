import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  Avatar,
  Card,
  CardActionArea,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: [[5, 5, 5, 5]],
    background: "#1F1D2B",
    borderRadius: "8px",
    padding: '0 20px',
    [theme.breakpoints.up("xs")]: {
      width: '47%',
      height: 210,
    },
    [theme.breakpoints.up("sm")]: {
      width: '31.6%',
      height: 265,
    },
    [theme.breakpoints.up("md")]: {
      width: '31.6%',
      height: 248,
    },
    [theme.breakpoints.up("lg")]: {
      width: '19%',
      height: 248,
    },
  },


  actionarea: {
    borderRadius: "8px",
    width: '100%',
    height: '100%'
  },
  artistimage: {
    margin: '20px auto 10px',
    [theme.breakpoints.up('xs')]: {
      height: 128,
      width: 128
    },
    [theme.breakpoints.up("sm")]: {
      width: 180,
      height: 180,

    },
    [theme.breakpoints.up("md")]: {
      width: 160,
      height: 160,

    },
  },
  artistname: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const BrowseArtistCard = ({
  artistImage,
  artistName,
  artistUrl,
  className,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <Card className={`${classes.card} ${className}`}>
      <CardActionArea
        className={classes.actionarea}
        onClick={() => history.push(`${url}/artist/${artistUrl}`)}
      >
        <Avatar
          className={classes.artistimage}
          alt={artistName}
          src={artistImage}
        />
        <Typography variant="h6" className={classes.artistname}>
          {artistName}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default BrowseArtistCard;
