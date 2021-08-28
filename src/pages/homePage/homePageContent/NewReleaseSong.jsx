import { Typography } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux'

const NewReleaseSong = ({newReleaseSong}) => {
  console.log('NEW RELEASE SONG CONTAIN: ', newReleaseSong);


  const renderNewReleaseSong = newReleaseSong.data.map((song, index) => <div key={index}>{song.songTitle}</div>)
  return (
    <div>
      <Typography variant="h5">NEW RELEASE SONG</Typography>
      {renderNewReleaseSong}
    </div>
  )
}

const mapStateToProps = (state) => ({
  newReleaseSong: state.newReleaseSong
})
export default connect(mapStateToProps)(NewReleaseSong)
