import React from 'react';
import {makeStyles } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { alpha } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
  root:{
    maxWidth: '229px',
    
  },
  imageInput:{
    height: '229px',
    borderRadius: theme.spacing(1),
    background: '#3C4156',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s linear',
    '&:hover':{
      cursor: 'pointer',
      background: alpha('#FFFFFF', 0.2)
    }
  },
  imagePreview:{
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(1)
  }
}))

const ImageInput = ({value, onChange, className}) => {
  const classes = useStyle();
  return (
    <div className={`${classes.root} ${className}`}>
      <label className={`${classes.imageInput}`} htmlFor="image_select_125">
        {Boolean(value) ?
        <img className={classes.imagePreview} src={URL.createObjectURL(value)} alt=""/>
        :
        <AddAPhotoIcon/>
        }
      </label>
      <input accept="image/*" id="image_select_125" onChange={onChange} style={{ display: 'none' }} type="file" />
    </div>
  )
}

export default ImageInput

