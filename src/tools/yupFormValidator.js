import * as yup from 'yup';
// FORMIK VALIDATION YUP =================================================

export const userFormik = {
  initialValues: {
    user_name: '',
    full_name: '',
    email: '',
    password: '',
  },
  validationSchema: yup.object({
    user_name: yup
      .string('Enter your username')
      .required('username is required')
      .matches(/^[\w_\-.\d]+$/gi, "Username must not contain space and special characters"),

    full_name: yup
      .string('Enter your full name')
      .required('full name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required')
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[\w\W\d]{8,}/gi,'Password must contain at least 1 capital letters, 1 lowercase letters, 1 number and 1 special character with minimum length of 8')
  })
}
