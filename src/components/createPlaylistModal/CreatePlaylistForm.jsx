import React from 'react'
import { useFormik } from 'formik'
import ImageInput from '../commons/ImageInput'
import { TextField, makeStyles } from '@material-ui/core'
import { RoundedButton } from '../commons/CstButton';
import { useDispatch } from 'react-redux';
import { closeCreatePlaylistModalAction } from '../../redux/actions/modalAction';

const useStyles = makeStyles(theme => ({
  formContainer: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]:{
      display: 'flex',
      textAlign: 'right'
    }
  },
  imageInput: {
    margin: theme.spacing(1, 'auto'),
    [theme.breakpoints.up('md')]:{
      minWidth: '229px',
      margin: theme.spacing(0, 2, 0, 0),
    }
  },
  textInput: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]:{
      margin: theme.spacing(0, 0, 1)
    }
  },
  inputButton: {
    margin: theme.spacing(1, 1),
    minWidth: theme.spacing(15)
  }
}))




const CreatePlaylistForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  //SETUP FORMIK
  const formik = useFormik({
    initialValues: {
      coverPhoto: '',
      playlistTitle: '',
      playlistDescription: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  const handleImageIput = (e) => {
    formik.setFieldValue('coverPhoto', e.target.files[0])
  }

  const handleCloseModal =() => {
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
        <RoundedButton className={classes.inputButton} type="submit" variant="primary">Save</RoundedButton>
      </div>
    </form>
  )
}

export default CreatePlaylistForm
