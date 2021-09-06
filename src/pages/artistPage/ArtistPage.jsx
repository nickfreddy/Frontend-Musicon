import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistAlbumAction, resetArtistAlbumAction } from "../../redux/actions/artistAlbumAction";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles, Container, Typography, Divider } from "@material-ui/core";
import BrowseAlbumCard from "../browsePage/browsePageComponent/BrowseAlbumCard";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .artist-header': {
      // height: theme.spacing(30),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
      },
      '& .artist-img-skeleton': {
        width: '100%',
        height: '200px',
        borderRadius: '8px'
      },
      '& .artist-img': {
        width: '200px',
        '& img': {
          display: 'block',
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: '8px',
          boxShadow: `4px 6px 8px #0065DA`

        }
      },
      '& .artist-info': {
        justifySelf: 'center',
        flex: 1,
        '& .MuiTypography-root:first-child': {
          textShadow: `3px 3px 5px #0065DA`,
          marginBottom: theme.spacing(1),
          fontSize: '3em',
          [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(3),
            fontSize: '4em',
          }
        }
      }
    },
    '& .artist-albums': {
      display: "flex",
      flexWrap: "wrap",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      // [theme.breakpoints.down("sm")]: {
      //   justifyContent: "center",
      // },
      // [theme.breakpoints.up("sm")]: {
      //   justifyContent: "left",
      // },
    }
  },

  linedText: {
    display: 'flex',
    // padding: theme.spacing(0, 3),
    [theme.breakpoints.up('md')]:{
      padding: theme.spacing(0, 3),
    },
    alignItems: 'center',
    '& .line': {
      height: '3px',
      background: 'white',
      width: '100%',
      borderRadius: '8px'
    },
    '& .MuiTypography-root': {
      whiteSpace: "nowrap",
      padding: theme.spacing(0, 2)
    }
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
  },
  divider: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  }
}));

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { artist_id } = useParams();
  const artistAlbum = useSelector((state) => state.artistAlbum);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getArtistAlbumAction(artist_id));
    return () => {
      dispatch(resetArtistAlbumAction());
    }
  }, [artist_id, dispatch]);


  const dummyData = [1, 2, 3, 4, 5];
  const renderBrowsedAlbums = (result) => {
    if (result.loading || !result.data.albums) return dummyData.map(data => <Skeleton key={data} variant="rect" className={classes.albumsCardSkeleton} />)
    if (result.data.albums.length === 0) return (
      <Typography variant="h6" style={{ marginLeft: 10, marginBottom: 30 }}>
        Oops!... No Album found
      </Typography>
    )
    return result.data.albums.map((album) => (
      <BrowseAlbumCard
        key={album._id}
        albumImage={album.albumImage}
        albumTitle={album.albumTitle}
        albumUrl={album._id}
        onClick={() => history.push(`/user/browse/album/${album._id}`)}
      />
    ))
  }











  return (
    <Container className={classes.root}>

      <div className="artist-header">
        <div className="artist-img">
          {artistAlbum.loading ?
            <Skeleton variant="rect" className="artist-img-skeleton" />
            :
            <img alt="the-artist" src={artistAlbum.data.photo} />
          }
        </div>
        <div className="artist-info">
          <Typography align="center" variant="h2" > {artistAlbum.data.name} </Typography>
          <div className={classes.linedText}>
            <span className="line"></span>
            <Typography align="right" variant="h5"> {artistAlbum.data.albums?.length} Album </Typography>
            <span className="line"></span>
          </div>
        </div>
      </div>

      <Divider className={classes.divider} />

      <div className="artist-albums">
        {renderBrowsedAlbums(artistAlbum)}

        {/* {artistAlbum.data.albums?.map((item, index) => (
          <div
            key={index}
            onClick={() => history.push(`/user/browse/album/${item._id}`)}
          >
            <BrowseAlbumCard
              albumImage={item.albumImage}
              albumTitle={item.albumTitle}
            />
          </div>
        ))} */}
      </div>
    </Container>
  );
};

export default ArtistPage;
