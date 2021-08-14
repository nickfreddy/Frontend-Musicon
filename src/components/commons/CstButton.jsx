import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const buttonDefaultStyle ={
  borderRadius: '10em',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
  primary:{
    ...buttonDefaultStyle,
    background: 'linear-gradient(90deg, #4399FD, #0065DA)',
  },
  secondary:{
    ...buttonDefaultStyle,
    background: '#92929D',
    '&:hover':{ 
      color: 'black'
    }
  },
  gold:{
    ...buttonDefaultStyle,
    background: 'linear-gradient(90deg, #FFCA6F, #F3AF38)'
  }
}));

export function RoundedButton({children,variant = "root", ...other}) {
  const classes = useStyles();
  return <Button {...other} className={classes[variant]}>{children}</Button>;
}
