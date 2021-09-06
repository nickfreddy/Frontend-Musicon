import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { musiconAPI } from "../../../redux/Api/setupAPI";
import BrowseSongCard from "./BrowseSongCard";
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
  songSkeleton:{
    // width: 325,
    height: 120,
    borderRadius: '8px',
    margin: theme.spacing(0.7),
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      width: '48%',
    },
    [theme.breakpoints.up('lg')]:{
      width: '32%',
    }
  }
}));

const BrowseSongs = ({ pattern }) => {
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
        `/songs/search?title=${pattern}&limit=10`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.songs) {
        setResult((state) => ({
          ...state,
          data: [...response.data.songs],
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



  const dummyData = [1, 2, 3,];
  const renderBrowsedSongs = (result) => {
    if (loading) return dummyData.map(data => <Skeleton key={data} variant="rect" className={classes.songSkeleton} />)
    if (result.data.length === 0) return (
      <Typography variant="h6" style={{ marginLeft: 10, marginBottom: 30 }}>
        Oops!... Can't find the song...
      </Typography>
    )
    return result.data.map((data) => (
      <BrowseSongCard
        key={data._id}
        songDetails={data}
        songImage={data.songImage}
        songTitle={data.songTitle}
        albumTitle={data.albumId.albumTitle}
        songUrl={data.id}
        className={classes.songcard}
      />
    ))
  }

  return (
    <div className={classes.root}>
     {renderBrowsedSongs(result)}
    </div>
  );
};

export default BrowseSongs;
