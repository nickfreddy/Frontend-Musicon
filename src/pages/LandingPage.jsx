import { Button, Typography } from '@material-ui/core'
import React from 'react';
import { useHistory } from 'react-router-dom';


const LandingPage = () => {

  const history = useHistory();


  return (
    <div>
      <Typography>LANDING PAGE</Typography>
      <Button variant="contained" color="primary" onClick={() => history.push('/user')}>After Login Go To UserPage</Button>

    </div>
  )
}

export default LandingPage
