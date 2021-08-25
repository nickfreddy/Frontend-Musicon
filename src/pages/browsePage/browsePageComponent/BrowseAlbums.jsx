import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { musiconAPI } from "../../../redux/Api/setupAPI";
import ArtistCard from "../../../components/artistCard/ArtistCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
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
      if (response.data.album) {
        setResult((state) => ({
          ...state,
          data: [...response.data.album],
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
        data: null,
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
  return (
    <div className={classes.root}>
      <ArtistCard className={classes.card}>
        <Typography>{pattern}</Typography>
      </ArtistCard>
    </div>
  );
};

export default BrowseAlbums;
