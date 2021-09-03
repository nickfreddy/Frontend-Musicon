import React from 'react'
import { Snackbar } from '@material-ui/core'
import { connect } from 'react-redux'

const SnackMessage = ({notification}) => {

  const handleClose =() => {
    //handle close snackbar from redux
    
  }

  return (
    <Snackbar open={notification.isOpen} onClose={handleClose}>

    </Snackbar>
  )
}

const mapStateToProps = (state) => ({
  notification: state.notification
})
export default connect(mapStateToProps)(SnackMessage)
