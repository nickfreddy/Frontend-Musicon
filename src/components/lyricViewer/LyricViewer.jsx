import { Container, Typography, Paper, makeStyles, Divider } from '@material-ui/core'
import React from 'react'
import GeneralModal from '../commons/GeneralModal';
import { connect, useDispatch } from 'react-redux';
import { closeLyricModalAction } from '../../redux/actions/modalAction';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .modal-paper': {
      [theme.breakpoints.up('sm')]: {
        maxWidth: '80%'
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '60%'
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '50%'
      },
    },
  },
  lyricContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  lyricPaper: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    overflow: 'auto',
    
    background: 'none',
    boxShadow: 'none'
    
  },
  songTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1)
  },
  lyricText: {
    marginTop: theme.spacing(2),
    wordWrap: 'break-word',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]:{
      textAlign: 'center',
    }
  },
  lyricNotFound: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))
const LyricViewer = ({ currentPlaying, songLyric, modals }) => {
  const dispatch = useDispatch()

  const handleCloseLyric = () => {
    dispatch(closeLyricModalAction())
  }

  const classes = useStyles();
  return (
    <GeneralModal className={classes.root} isOpen={modals.openLyricModal} handleClose={handleCloseLyric} title="Lyric Viewer">
      <Container className={classes.lyricContainer}>
        <Paper className={classes.lyricPaper}>
          <Typography align="center" className={classes.songTitle} variant="h5">{currentPlaying?.songDetail?.songTitle || "Song Title"}</Typography>
          <Divider />
          <Typography className={classes.lyricText} component="pre">
            {songLyric.data !== "" ?
              <span>{songLyric.data}</span>
              :
              <span className={classes.lyricNotFound}>Oops.. Lyric not available yet...</span>
            }
          </Typography>
        </Paper>
      </Container>
    </GeneralModal>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying,
  songLyric: state.songLyric,
  modals: state.modals
})
export default connect(mapStateToProps)(LyricViewer)
