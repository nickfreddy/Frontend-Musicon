import { 
  TableContainer, 
  Table, 
  makeStyles, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableRow, 
  Typography, 
  IconButton, 
  alpha,
  TableFooter,
  TablePagination,
  Container, 
} from '@material-ui/core'
import { Delete } from '@material-ui/icons';
import React, {useState} from 'react';
import TablePaginationActions from './TablePaginationAction';
import samplePhoto from '../../../assets/img/XMLID1383.svg'


const dummyData = [
  {
    _id: '31',
    songIcon: '',
    title: 'Jika Kami Bersama',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '32',
    songIcon: samplePhoto,
    title: 'Kuat Kita Bersinar',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '33',
    songIcon: samplePhoto,
    title: 'Kuta Rock City',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '34',
    songIcon: samplePhoto,
    title: 'Angels and Outsider',
    artist: 'Superman Is Dead',
    duration: '3.20',
  }, {
    _id: '35',
    songIcon: samplePhoto,
    title: 'Punk Rock City',
    artist: 'Superman Is Dead',
    duration: '3.20',
  },
  {
    _id: '36',
    songIcon: samplePhoto,
    title: 'Lady Rose',
    artist: 'Superman Is Dead',
    duration: '3.20',
  }
]

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    background: '#1F1D2B',
    borderRadius: theme.spacing(1)
  },
  songTitleTable: {
    display: 'flex',
    alignItems: 'center'
  },
  songIcon:{
    marginRight: theme.spacing(2)
  },
  tableRowContent:{
    background: alpha('#FFFFFF', 0),
    transition: 'all 0.4s ease',
    '&:hover':{
      background: alpha('#FFFFFF', 0.1),
      cursor: 'pointer'
    }
  }
}))

const TopSongSection = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, dummyData.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const combineIconAndTitle = (icon, title) => (
    <div className={classes.songTitleTable}>
      {icon ?
      <img className={`${classes.songIcon}`} width="40px" src={icon} alt="" />
      :
      <img className={`${classes.songIcon}`} width="40px" src={samplePhoto} alt="" />
      }
      <Typography>{title}</Typography>
    </div>
  );

  const handleDelete = (_id) => {
    alert(`This id ${_id} song will be deleted`)
  }

  const handleSongPlay =(_id) => {
    // console.log(`This song with id ${_id} will be played`)
  }
  const renderTableContent = (rowsPerPage > 0 ? dummyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): dummyData).map((song, index) => (
    <TableRow style={{ height: 81}} key={index} className={classes.tableRowContent}>
      <TableCell onClick={() => handleSongPlay(song._id)}>
        <Typography align="center">
          {page > 0 ? (page * rowsPerPage)+index+1 :index + 1}
        </Typography>
      </TableCell>
      <TableCell style={{width: 400}} onClick={() => handleSongPlay(song._id)}>
        {combineIconAndTitle(song.songIcon, song.title)}
      </TableCell>
      <TableCell onClick={() => handleSongPlay(song._id)}>
        <Typography align="center">
          {song.artist}
        </Typography>
      </TableCell >
      <TableCell onClick={() => handleSongPlay(song._id)}>
        <Typography align="center">
          {song.duration}
        </Typography>
      </TableCell>
      <TableCell align="center"><IconButton onClick={() => handleDelete(song._id)}><Delete /></IconButton></TableCell>
    </TableRow>
  ))
  return (
    <TableContainer component={Container} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="center">Artist</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTableContent}
          {emptyRows > 0 && (
            <TableRow style={{ height: 81 * emptyRows }}>
              <TableCell colSpan={5} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={dummyData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default TopSongSection
