import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { musiconAPI } from "../../../redux/Api/setupAPI";
import BrowseAlbumCard from "./BrowseAlbumCard";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "left",
    },
  },
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
        console.log("ERROR SETTING DATA TO STATE");
        setResult({
          data: [],
          error: false,
          errorMessage: "",
        });
        setLoading(false);
      }
    } catch (err) {
      console.log(
        "ERROR GET SONG BY TITLE ON BROWSE SONG, DETAILS: ",
        err.response
      );
      setResult((state) => ({
        ...state,
        data: [],
        error: true,
        errorMessage: err.response.data.errors[0],
      }));
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = setTimeout(
      () => getSongByTitle(pattern), // sebenarnya dia getsong by tagName
      1200
    );
    return () => {
      clearTimeout(fetchData);
      resetAllState();
    };
  }, [pattern]);
  console.log(result, loading);
  console.log("album", result.data);

  return (
    <div className={classes.root}>
      {result.data.length !== 0 ? (
        result.data.map((data) => (
          <BrowseAlbumCard
            key={data._id}
            albumImage={data.albumImage}
            albumTitle={data.albumTitle}
            albumUrl={data.id}
            className={classes.albumcard}
          />
        ))
      ) : (
        <Typography variant="h6" style={{ marginLeft: 10, marginBottom: 30 }}>
          Oops!... Can't find the album...
        </Typography>
      )}
    </div>
  );
};

export default BrowseAlbums;