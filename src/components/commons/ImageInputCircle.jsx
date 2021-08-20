import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { alpha } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
  root: {
    maxWidth: '160px',

  },
  imageInput: {
    height: '160px',
    borderRadius: theme.spacing(100),
    background: '#3C4156',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s linear',
    '&:hover': {
      cursor: 'pointer',
      background: alpha('#FFFFFF', 0.2)
    }
  },
  imageContainer: {
    height: '160px',
    width: '160px',
    position: 'relative'
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(100)
  },
  changeImageIcon: {
    position: 'absolute',
    width: '160px',
    height: '160px',
    background: "#252836",
    borderRadius: theme.spacing(100),
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    opacity: '0.5',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    '&:hover': {
      opacity: '0.8'
    }
  }
}))

const ImageInputCircle = ({ value, disabled, onChange, className }) => {
  const classes = useStyle();
  return (
    <div className={`${classes.root} ${className}`}>
      <label className={`${classes.imageInput}`} htmlFor="image_select_125">
        {Boolean(value) ?
          <div className={classes.imageContainer}>
            <img className={classes.imagePreview} src={typeof value === "string" ? value : URL.createObjectURL(value)} alt="" />
            {disabled ||
            <div className={classes.changeImageIcon}>
              <div>
              <AddAPhotoIcon />
              <Typography variant='body1'>Change Photo</Typography>
              </div>
            </div>
            }
          </div>
          :
          <AddAPhotoIcon />
        }
      </label>
      <input disabled={disabled} accept="image/*" id="image_select_125" onChange={onChange} style={{ display: 'none' }} type="file" />
    </div>
  )
}

export default ImageInputCircle

