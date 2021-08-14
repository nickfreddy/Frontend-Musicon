import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import logoImage from '../../assets/img/Logo.svg'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#252836",
    boxShadow: theme.shadows[5],
    borderRadius: theme.spacing(1),
    width: theme.spacing(40),
  },
  header: {
    background: "#1F1D2B",
    overflow: 'hidden',
    borderRadius: theme.spacing(1,1,0,0),
    padding: theme.spacing(1),
    '& img':{
      display: 'block',
      margin: theme.spacing(0, 'auto'),
      width: '120px'
    }
  },

}));

export default function CstModal({isOpen, handleClose, children}) {
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
              <img src={logoImage} alt="..."/>
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
