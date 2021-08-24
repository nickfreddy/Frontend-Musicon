import React from 'react'
import { useFormik } from 'formik'
import ImageInput from '../commons/ImageInput'
import { TextField, makeStyles, CircularProgress } from '@material-ui/core'
import { RoundedButton } from '../commons/CstButton';
import { useDispatch, useSelector } from 'react-redux';
import { closeCreatePlaylistModalAction } from '../../redux/actions/modalAction';
import { getUserPlaylistAction, postUserPlaylistAction } from '../../redux/actions/userPlaylistAction';
import { updatePlaylistDetailAction } from '../../redux/actions/playlistDetailAction';
import { getLogedInUserAction } from '../../redux/actions/userAction';

const useStyles = makeStyles(theme => ({
  formContainer: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      textAlign: 'right'
    }
  },
  imageInput: {
    margin: theme.spacing(1, 'auto'),
    [theme.breakpoints.up('md')]: {
      minWidth: '241px',
      margin: theme.spacing(0, 2, 0, 0),
    }
  },
  textInput: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 0, 1)
    }
  },
  inputButton: {
    margin: theme.spacing(1, 1),
    minWidth: theme.spacing(15)
  }
}))




const CreatePlaylistForm = ({ photo, title, description, actionUpdate, playlistId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userPlaylist = useSelector(state => state.userPlaylist);
  const playlistDetail = useSelector(state => state.playlistDetail);
  const user = useSelector(state => state.user);
  //SETUP FORMIK
  const formik = useFormik({
    initialValues: {
      coverPhoto: photo,
      playlistTitle: title,
      playlistDescription: description,
    },
    onSubmit: values => {
      if (actionUpdate) {
        // alert('Handle Action Update' + JSON.stringify(values, null, 2));
        //onUpdate if photo is string indicate no update for photo 
        //then dont update the photo,  only send  playlist title and description
        //in saga worker
        dispatch(updatePlaylistDetailAction(playlistId, values.playlistTitle, values.coverPhoto, values.playlistDescription, () => dispatch(closeCreatePlaylistModalAction())));
      } else {
        // alert('Handle Action Create' + JSON.stringify(values, null, 2));
        dispatch(postUserPlaylistAction(values.playlistTitle, values.coverPhoto, values.playlistDescription,
          () => dispatch(getUserPlaylistAction(
            () => dispatch(getLogedInUserAction(
              () => dispatch(closeCreatePlaylistModalAction())
            ))))));

      }
    }
  })

  const handleImageIput = (e) => {
    formik.setFieldValue('coverPhoto', e.target.files[0])
  }

  const handleCloseModal = () => {
    dispatch(closeCreatePlaylistModalAction());
  }
  return (
    <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
      <ImageInput className={classes.imageInput} value={formik.values.coverPhoto} onChange={handleImageIput} />
      <div className={classes.textInput}>
        <TextField
          id="playlistTitle"
          name="playlistTitle"
          label="Title"
          value={formik.values.playlistTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.playlistTitle && Boolean(formik.errors.playlistTitle)}
          helperText={formik.touched.playlistTitle && formik.errors.playlistTitle}
          fullWidth
          variant="outlined"
          className={`${classes.textInput}`}
        />
        <TextField
          id="playlistDescription"
          name="playlistDescription"
          label="Description"
          value={formik.values.playlistDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.playlistDescription && Boolean(formik.errors.playlistDescription)}
          helperText={formik.touched.playlistDescription && formik.errors.playlistDescription}
          fullWidth
          variant="outlined"
          multiline
          minRows={7}
          className={`${classes.textInput}`}
        />
        <RoundedButton onClick={handleCloseModal} className={classes.inputButton} variant="secondary">Cancle</RoundedButton>
        <RoundedButton
          startIcon={(userPlaylist.loading || playlistDetail.loading || user.loading) && <CircularProgress size={20} />} //Because it used by both saga worder userPlaylist and detail playlist
          className={classes.inputButton}
          type="submit"
          variant="primary"
        >Save</RoundedButton>
      </div>
    </form>
  )
}

export default CreatePlaylistForm
