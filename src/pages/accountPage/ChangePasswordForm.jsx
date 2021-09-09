import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Typography, makeStyles, TextField, InputAdornment, IconButton, CircularProgress } from '@material-ui/core'
import { Visibility, VisibilityOff, Warning } from '@material-ui/icons';
import { RoundedButton } from '../../components/commons/CstButton';
import InfoBar from '../../components/commons/InfoBar';
import { musiconAPI } from '../../redux/Api/setupAPI';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  textInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonContainer: {
    display: 'flex',

  },
  submitButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: 'auto'
  },

}))

const validationSchema = yup.object({
  currentPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('This field is required'),
  newPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('This field is required')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[\w\W\d]{8,}/gi, 'Password must contain at least 1 capital letters, 1 lowercase letters, 1 number and 1 special character with minimum length of 8'),
  confirmPassword: yup
    .string().when("newPassword", {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("newPassword")], "Password not match"
      )
    })
})


const ChangePasswordForm = ({ disabled }) => {

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [infoNotification, setInfoNotification] = useState({
    info: '',
    open: false,
    error: false
  });
  const classes = useStyles();


  const handlePasswordChanges = async (currentPassword, newPassword, resetForm) => {
    setLoading(true);
    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
    const params = new URLSearchParams();
    params.append('currentPassword', currentPassword);
    params.append('newPassword', newPassword);
    try {
      const response = await musiconAPI.put(`/users/updatepassword/${user_id}`, params, {
        headers: {
          "Authorization": token
        }
      });
      if (response.data.message) {
        setInfoNotification(state => ({
          ...state,
          info: response.data.message,
          open: true,
          error: false
        }));
        setLoading(false);
        resetForm();
      } else {
        console.log('THERE IS NO RESPONSE DETAILS:', response)
        setInfoNotification(state => ({
          ...state,
          info: 'No response from server',
          open: true,
          error: true
        }));
        setLoading(false);
        resetForm();
      }
    } catch (err) {
      console.log('ERROR CHANGING PASSWORD DETAIL:', err.response);
      setInfoNotification(state => ({
        ...state,
        info: err.response.data.errors,
        open: true,
        error: true
      }));
      setLoading(false)
      resetForm();
    }
  }

  //FORMIK SETUP
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      const { currentPassword, newPassword } = values;
      handlePasswordChanges(currentPassword, newPassword, resetForm);
    }
  })

  const toggleShowCurrentPassword = () => setShowCurrentPassword(state => !state);
  const toggleShowNewPassword = () => setShowNewPassword(state => !state);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(state => !state);

  useEffect(() => {

    return () => {
      setInfoNotification({
        info: '',
        open: false,
        error: false
      })
    }
  }, [])

  return (
    <form onSubmit={formik.handleSubmit}>
      <InfoBar open={infoNotification.open}
        startIcon={infoNotification.error ? <Warning /> : <CheckCircleOutlineIcon />}
        error={infoNotification.error}
      >
        <Typography>{infoNotification.info}</Typography>
      </InfoBar>

      <TextField
        disabled={disabled}
        type={showCurrentPassword ? "text" : "password"}
        fullWidth
        className={classes.textInput}
        variant="outlined"
        id="currentPassword"
        name="currentPassword"
        label="Current Password"
        value={formik.values.currentPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
        helperText={formik.touched.currentPassword && formik.errors.currentPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleShowCurrentPassword}>
                {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <TextField
        disabled={disabled}
        type={showNewPassword ? "text" : "password"}
        fullWidth
        className={classes.textInput}
        variant="outlined"
        id="newPassword"
        name="newPassword"
        label="New Password"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleShowNewPassword}>
                {showNewPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <TextField
        disabled={disabled}
        type={showConfirmPassword ? "text" : "password"}
        fullWidth
        className={classes.textInput}
        variant="outlined"
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleShowConfirmPassword}>
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div className={classes.buttonContainer}>
        <RoundedButton
          disabled={disabled}
          startIcon={loading && <CircularProgress size={20} />}
          type="submit"
          className={classes.submitButton}
          variant="primary"
        >Save Changes</RoundedButton>
      </div>

    </form>
  )
}

export default ChangePasswordForm
