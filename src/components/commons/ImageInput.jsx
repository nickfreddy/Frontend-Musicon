import React from 'react';
import {makeStyles } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { alpha } from '@material-ui/core';
import {sourceUrl} from '../../redux/Api/setupAPI';


const useStyle = makeStyles(theme => ({
  root:{
    maxWidth: '241px',
    
  },
  imageInput:{
    height: '241px',
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
    borderRadius: theme.spacing(1),
    objectFit: 'cover',
    objectPosition: 'top'
  }
}))



const ImageInput = ({value, onChange, className}) => {
  const classes = useStyle();



  const renderPhoto = (value) =>{
    if(Boolean(value)){
      // console.log('INI FOTONYA', value)
      // This mitigate type of received photo to prevent broken photo display

        if(value !== 'https://i1.sndcdn.com/artworks-000560586507-q7vve7-t500x500.jpg'){
          if(typeof value === 'string'){
            return <img className={classes.imagePreview} src={sourceUrl + value} alt="..." />
          }else{
            return <img className={classes.imagePreview} src={URL.createObjectURL(value)} alt="..." />
          }
        }else{
          return <img className={classes.imagePreview} src="https://i1.sndcdn.com/artworks-000560586507-q7vve7-t500x500.jpg" alt="..." />;
        }    
    }else{
      return <AddAPhotoIcon/>
    }
  }
  return (
    <div className={`${classes.root} ${className}`}>
      <label className={`${classes.imageInput}`} htmlFor="image_select_125">
        {renderPhoto(value)}
      </label>
      <input accept="image/*" id="image_select_125" onChange={onChange} style={{ display: 'none' }} type="file" />
    </div>
  )
}

export default ImageInput

