import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Typography, makeStyles, TextField, InputAdornment, IconButton, CircularProgress } from '@material-ui/core'
import { Visibility, VisibilityOff, Warning } from '@material-ui/icons';
import { RoundedButton } from '../commons/CstButton';
import InfoBar from '../commons/InfoBar';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUserAction } from '../../redux/actions/userAction';
import { useHistory } from 'react-router-dom';

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
  submitButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),

  }
}))

//YUP SETUP
const validationSchema = yup.object({
  fullName: yup
    .string('Enter your Full Name')
    .required('This field is required'),
  userName: yup
    .string('Enter your Username')
    .required('This field is required')
    .matches(/^[\w_\-.\d]+$/gi, "Username must not contain space and special characters"),
  email: yup
    .string('Enter your Email')
    .email('Enter a valid email')
    .required('This field is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('This field is required')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[\w\W\d]{8,}/gi, 'Password must contain at least 1 capital letters, 1 lowercase letters, 1 number and 1 special character with minimum length of 8'),
  confirmPassword: yup
    .string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("password")], "Password not match"
      )
    })
})

const SignUpForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { openRegisterInfoModal, loading, info } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();


  //FORMIK SETUP
  const formik = useFormik({
    initialValues: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''

    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const {fullName, userName, email, password} = values;
      dispatch(signUpUserAction(userName,fullName, email, password, () => history.push('/user')));
      // dispatch(signUpUserAction(userName,fullName, email, password, () => history.push('/'))); //route to landing page

    }
  })

  const toggleShowPassword = () => setShowPassword(state => !state);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(state => !state);
  return (
    <div>
      <Typography className={classes.title} variant="h5">Sign Up</Typography>

      <InfoBar open={openRegisterInfoModal}
        startIcon={<Warning />}
      >
        <Typography>{info}</Typography>
      </InfoBar>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          className={classes.textInput}
          variant="outlined"
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          fullWidth
          className={classes.textInput}
          variant="outlined"
          id="userName"
          name="userName"
          label="Username"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <TextField
          fullWidth
          className={classes.textInput}
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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

        <TextField
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
        <Typography variant="body1">Forgot Password ? </Typography>
        <RoundedButton startIcon={loading && <CircularProgress size={20}/>} type="submit" className={classes.submitButton} fullWidth variant="primary">Sign Up</RoundedButton>
      </form>
    </div>
  )
}

export default SignUpForm
