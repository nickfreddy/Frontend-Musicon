import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const buttonDefaultStyle = {
  borderRadius: '10em',
  border: 0,
  color: 'white',
  height: 40,
  padding: '0 30px',
}
const useStyles = makeStyles(theme => ({
  root: {
    ...buttonDefaultStyle,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  },
  primary: {
    ...buttonDefaultStyle,
    background: 'linear-gradient(90deg, #4399FD, #0065DA)'
  },
  secondary: {
    ...buttonDefaultStyle,
    background: 'linear-gradient(90deg, #8f8b8b, #92929D)'
  },
  danger: {
    ...buttonDefaultStyle,
    background: 'linear-gradient(90deg, #f57171, #f72323)'
  },
  gold: {
    ...buttonDefaultStyle,
    background: 'linear-gradient(90deg, #FFCA6F, #F3AF38)'
  },
  transparent: {
    ...buttonDefaultStyle,
    border: '1px solid #3C4156'
  },
  disabledClass:{
    ...buttonDefaultStyle,
    background: 'gray'
  }
}));

export function RoundedButton({ children, disabled = false, variant, className = "root", ...other }) {
  const classes = useStyles();
  return (
    <Button
      {...other}
      disabled = {disabled}
      className={`${classes[variant]} ${className} ${disabled && classes.disabledClass}`}
    >{children}
    </Button>
  );
}

