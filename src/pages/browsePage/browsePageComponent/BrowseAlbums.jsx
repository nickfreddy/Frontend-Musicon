import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { musiconAPI } from "../../../redux/Api/setupAPI";
import BrowseAlbumCard from "./BrowseAlbumCard";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "left",
    },
  },
  albumsCardSkeleton: {
    borderRadius: '8px',
    margin: 5,
    // width: 200,
    // height: 230,
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
  }
}));

const BrowseAlbums = ({ pattern }) => {
  const [result, setResult] = useState({
    data: [],
    error: false,
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const resetAllState = () => {
    setResult({
      data: [],
      error: false,
      errorMessage: "",
    });
    setLoading(false);
  };

  const getSongByTitle = async (pattern) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await musiconAPI.get(
        `/albums/search?page=1&limit=10&title=${pattern}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.albums) {
        setResult((state) => ({
          ...state,
          data: [...response.data.albums],
          error: false,
          errorMessage: "",
        }));
        setLoading(false);
      } else {
        // console.log("ERROR SETTING DATA TO STATE");
        setResult({
          data: [],
          error: false,
          errorMessage: "",
        });
        setLoading(false);
      }
    } catch (err) {
      // console.log(
      //   "ERROR GET SONG BY TITLE ON BROWSE SONG, DETAILS: ",
      //   err.response
      // );
      setResult((state) => ({
        ...state,
        data: [],
        error: true,
        errorMessage: err.response?.data?.errors[0],
      }));
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = setTimeout(
      () => getSongByTitle(pattern),
      50
    );
    return () => {
      clearTimeout(fetchData);
      resetAllState();
    };
  }, [pattern]);

  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const renderBrowsedAlbums = (result) => {
    if (loading) return dummyData.map(data => <Skeleton key={data} variant="rect" className={classes.albumsCardSkeleton} />)
    if (result.data.length === 0) return (
      <Typography variant="h6" style={{ marginLeft: 10, marginBottom: 30 }}>
        Oops!... Can't find the Album...
      </Typography>
    )
    return result.data.map((data) => (
      <BrowseAlbumCard
        key={data._id}
        albumImage={data.albumImage}
        albumTitle={data.albumTitle}
        albumUrl={data.id}
        className={classes.albumcard}
      />
    ))
  }

  return (
    <div className={classes.root}>
      {renderBrowsedAlbums(result)}
    </div>
  );
};

export default BrowseAlbums;
