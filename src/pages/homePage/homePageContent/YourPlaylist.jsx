import { Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

const YourPlaylist = ({userPlaylist}) => {

  const renderUserPlaylist = userPlaylist.data.map((playlist, index) => <div key={index}>{playlist.playlistTitle}</div>)

  return (
    <div>
      <Typography variant="h5">YOUR PLAYLIST</Typography>
      {renderUserPlaylist}
    </div>
  )
}

const mapStateToProps = (state) => ({
  userPlaylist: state.userPlaylist
})
export default connect(mapStateToProps)(YourPlaylist)
