import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    // display: 'flex',
    // justifyContent: 'center',
    overflowY: 'scroll'
  },
  paper: {
    backgroundColor: "#252836",
    boxShadow: theme.shadows[5],
    borderRadius: theme.spacing(1),
    margin: theme.spacing(4, 'auto'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.spacing(60)
    }
  },
  header: {
    background: "#1F1D2B",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderRadius: theme.spacing(1, 1, 0, 0),
    padding: theme.spacing(1),
    '& .MuiTypography-root': {
      marginLeft: theme.spacing(2)
    }
  },

}));

export default function GeneralModal({ isOpen, handleClose, title, children }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <Typography variant="h5">{title}</Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </div>
            <div>
              {children}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
