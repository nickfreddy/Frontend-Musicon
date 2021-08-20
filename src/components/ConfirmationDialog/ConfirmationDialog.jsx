import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import SmallModal from '../commons/SmallModal'
import { RoundedButton } from '../commons/CstButton'

const useStyles = makeStyles(theme => ({
  root:{
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  buttonContainer:{
    marginTop: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]:{
      textAlign: 'right',
    },
    '& > .MuiButton-root':{
      minWidth: '142px',
      margin: theme.spacing(1),
      [theme.breakpoints.up('md')]:{
        margin: theme.spacing(1,2,1,0)
      }
    }
  }
}))

const ConfirmationDialog = ({ 
  open, 
  title, 
  mainText, 
  secondaryText, 
  actionTrue, 
  handleClose,
  buttonOk = "Save",
  buttonVariant = "primary",
}) => {
  const classes = useStyles();
  return (
    <SmallModal handleClose={handleClose} isOpen={open} title={title}>
      <Container className={classes.root}>

        <Typography variant="h5">{mainText}</Typography>
        <Typography>{secondaryText}</Typography>
        <div className={classes.buttonContainer}>
          <RoundedButton onClick={handleClose} variant="secondary">Cancle</RoundedButton>
          <RoundedButton onClick={actionTrue} variant={buttonVariant}>{buttonOk}</RoundedButton>
        </div>
      </Container>
    </SmallModal>
  )
}

export default ConfirmationDialog
