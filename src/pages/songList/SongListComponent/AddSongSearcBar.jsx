import React, { useState } from 'react'
import {
  Paper,
  Collapse,
  makeStyles,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchResult from './SearchBarComponent/SearchResult';
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
  inputClear: {
    cursor: 'pointer',
  },
  searchInput: {
    '& .MuiOutlinedInput-root': {
      background: '#3C4156',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
  },
  searchBarTitle: {
    marginBottom: theme.spacing(2)
  }
}));

const AddSongSearcBar = ({ open }) => {
  const [searchPattern, setSearchPattern] = useState('');
  const classes = useStyles();

  const handleChangeSearchPattern = (e) => {
    setSearchPattern(e.target.value);
  }
  const handleSearchReset = () => {
    setSearchPattern('')
  }
  return (
    <div>
      <Collapse in={open}>
        <Paper elevation={4} className={classes.paper}>
          <Typography className={classes.searchBarTitle} variant="h5">Let's find song for your playlist</Typography>
          <FormControl fullWidth size="small" className={classes.searchInput}>
            <OutlinedInput
              onChange={handleChangeSearchPattern}
              value={searchPattern}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="Search song ..."
              endAdornment={searchPattern &&
                <InputAdornment onClick={handleSearchReset} className={classes.inputClear} position="end">
                  <CloseIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <SearchResult searchPattern={searchPattern} />
        </Paper>
      </Collapse>
    </div>
  )
}

export default AddSongSearcBar
