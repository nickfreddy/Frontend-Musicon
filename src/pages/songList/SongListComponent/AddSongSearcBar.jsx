import React from 'react'
import {
  Paper,
  Collapse,
  makeStyles,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    marginBottom: theme.spacing(2),
    background: "#1F1D2B",
    padding: theme.spacing(2)
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const AddSongSearcBar = ({ open }) => {
  const classes = useStyles();
  return (
    <div>
      <Collapse in={open}>
        <Paper elevation={4} className={classes.paper}>
          <Typography variant="h5">Find song</Typography>
          <FormControl size="small">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="Search song ..."
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon/>
                </InputAdornment>
              }
            />
          </FormControl>
        </Paper>
      </Collapse>
    </div>
  )
}

export default AddSongSearcBar
