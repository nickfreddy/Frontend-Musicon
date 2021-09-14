import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Typography, makeStyles, TextField, InputAdornment, IconButton, CircularProgress } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { RoundedButton } from '../commons/CstButton';
import InfoBar from '../commons/InfoBar';
import { useDispatch, useSelector } from 'react-redux';
import { Warning } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { signInUserAction } from '../../redux/actions/userAction';
import useLocalStorage from '../../functions/useLocalStorage';

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
  submitButton:{
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }
}))


//YUP SETUP
const validationSchema = yup.object({
  userNameOrEmail: yup
    .string('Enter your username or email address')
    .required('This field is required'),
  password: yup
    .string('Enter your password')
    .required('This field is required')
})


//============ COMPONENT ======================
const SignInForm = ({handleClose}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch()
  const {openLoginInfoModal, loading, info} = useSelector(state => state.user);
  const appLocalStorage = useLocalStorage();
  //FORMIK SETUP
  const formik = useFormik({
    initialValues: {
      userNameOrEmail: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const {userNameOrEmail, password} = values;
      dispatch(signInUserAction(userNameOrEmail, password, () => {
        appLocalStorage.setLoginMethodNormal();
        history.push('/user'); 
        handleClose()}));
      // dispatch(signInUserAction(userNameOrEmail, password, () => history.push('/'))); //route to landing page

    }
  })

  const toggleShowPassword = () => setShowPassword(state => !state);

  return (
    <div>
      <Typography className={classes.title} variant="h5">Log In</Typography>
      <InfoBar open={openLoginInfoModal}
        startIcon={<Warning />}
      >
        <Typography>{info}</Typography>

      </InfoBar>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          className={classes.textInput}
          variant="outlined"
          id="userNameOrEmail"
          name="userNameOrEmail"
          label="Username or Email"
          value={formik.values.userNameOrEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userNameOrEmail && Boolean(formik.errors.userNameOrEmail)}
          helperText={formik.touched.userNameOrEmail && formik.errors.userNameOrEmail}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          fullWidth
          className={classes.textInput}
          variant="outlined"
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Typography variant="body1">Forgot Password ? </Typography>
        <RoundedButton startIcon={loading && <CircularProgress size={20}/>} type="submit" className={classes.submitButton} fullWidth variant="primary">Login</RoundedButton>
      </form>
    </div>
  )
}

export default SignInForm
