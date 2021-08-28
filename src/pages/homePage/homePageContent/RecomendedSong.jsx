import { Typography } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux'

const RecomendedSong = ({recomendedSong}) => {
  console.log('RECOMENDED SONG ISINYA ADALAH :', recomendedSong);


  const renderRecomendedSong = recomendedSong.data.map((song, index) => <div key={index}>{song.songTitle}</div>)

  
  return (
    <div>
      <Typography variant="h5">RECOMENDED SONG</Typography>
      {renderRecomendedSong}
    </div>
  )
}

const mapStateToProps = (state) => ({
  recomendedSong: state.recomendedSong
})
export default connect(mapStateToProps)(RecomendedSong)
