import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, FormControl, OutlinedInput, Button, CircularProgress } from '@material-ui/core';
import { useFormik } from 'formik';
import ImageInputCircle from '../../../components/commons/ImageInputCircle';
import { RoundedButton } from '../../../components/commons/CstButton';
import { useHistory, useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getLogedInUserAction, updateUserAction } from '../../../redux/actions/userAction';

const useStyles = makeStyles(theme => ({
  form: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center'
    }
  },
  imageInput: {
    margin: theme.spacing(3, 'auto'),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(3, 3, 3, 0),
      width: '100%'
    }
  },
  sidePanel: {
    [theme.breakpoints.up('md')]: {
      width: 'auto'
    }
  },
  textInput: {
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  label: {
    margin: theme.spacing(1, 0),
  },
  inputFullName: {
    margin: theme.spacing(0, 0, 1),
    '& .MuiOutlinedInput-root': {
      background: '#1F1D2B',
      color: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    [theme.breakpoints.up('md')]: {
      width: 400
    }
  },
  inputFullNameActive: {
    '& .MuiOutlinedInput-root': {
      background: '#3C4156',
      color: 'white',
    }
  },
  actionButton: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 0, 0, 2)
    }
  },
  info: {
    margin: theme.spacing(0, 0, 1),
    color: 'gray'
  },
  editButtonContainer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  editButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: theme.spacing(15),
    height: 37
  },
  enableEditButton: {
    whiteSpace: 'nowrap',

  }
}))
const ProfileSection = ({ photo, fullName, createdPlaylist }) => {
  const classes = useStyles();
  const [enableEdit, setEnableEdit] = useState(false)
  const history = useHistory();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);


  const handleEnableEdit = () => {
    setEnableEdit(true)
  }
  const handleDisableEdit = () => {
    setEnableEdit(false);
    history.push(url); //reset the state of photo, you know why ? let ask me (surya) it is long explanation
  }

  const handleAfterUpdate = () => {
    setEnableEdit(false);
  }

  //Formik SETUP
  const formik = useFormik({
    initialValues: {
      userPhoto: photo,
      fullName: fullName
    },
    enableReinitialize: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(updateUserAction(values.fullName, values.userPhoto, () => dispatch(getLogedInUserAction(() => handleAfterUpdate()))));

    }
  })

  const handlePhotoChange = (e) => {
    formik.setFieldValue('userPhoto', e.target.files[0])
  }










  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <ImageInputCircle
          disabled={!enableEdit}
          className={classes.imageInput}
          value={formik.values.userPhoto}
          onChange={handlePhotoChange}
        />
        <div className={classes.sidePanel}>
          <Typography className={classes.label} variant="h6">Full Name</Typography>
          <div className={classes.textInput}>
            <FormControl size="small" className={`${classes.inputFullName} ${enableEdit && classes.inputFullNameActive}`} fullWidth variant="outlined">
              <OutlinedInput
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                disabled={enableEdit ? false : true}
              />
            </FormControl>
            <div className={classes.actionButton}>
              {enableEdit ?
                <div className={classes.editButtonContainer}>
                  <RoundedButton onClick={handleDisableEdit} className={classes.editButton} variant="secondary">Cancel</RoundedButton>
                  <RoundedButton startIcon={user.loading && <CircularProgress size={20} />} type="submit" className={classes.editButton} variant="primary">Save</RoundedButton>
                </div>
                :
                <Button className={classes.enableEditButton} onClick={handleEnableEdit} color="primary" variant="contained">Edit</Button>
              }
            </div>
          </div>
          <Typography className={classes.info} variant="body1">{createdPlaylist} Playlist Created</Typography>
        </div>
      </form>

    </div>
  )
}

export default ProfileSection
