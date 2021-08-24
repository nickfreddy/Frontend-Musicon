import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { musiconAPI } from "../../../redux/Api/setupAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
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
  return (
    <div className={classes.root}>
      <Typography>{pattern}</Typography>
    </div>
  );
};

export default BrowseSongs;
