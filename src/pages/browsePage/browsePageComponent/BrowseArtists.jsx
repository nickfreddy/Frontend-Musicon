import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { musiconAPI } from "../../../redux/Api/setupAPI";
import BrowseArtistCard from "./BrowseArtistCard";

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

const BrowseArtists = ({ pattern }) => {
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
        `/artists/search?name=${pattern}&limit=10`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.artist) {
        setResult((state) => ({
          ...state,
          data: [...response.data.artist],
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
  console.log("artist", result.data);

  return (
    <div className={classes.root}>
      {result.data.length !== 0 ? (
        result.data.map((data) => (
          <BrowseArtistCard
            key={data._id}
            artistImage={data.photo}
            artistName={data.name}
            artistUrl={data.id}
            className={classes.artistcard}
          />
        ))
      ) : (
        <Typography variant="h6" style={{ marginLeft: 10, marginBottom: 30 }}>
          Oops!... Can't find the artist...
        </Typography>
      )}
    </div>
  );
};

export default BrowseArtists;
