import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { withTaggingClickable, useInitialize } from '../../../src/react';
import { Paper } from '@mui/material';

const TrackingButton = withTaggingClickable(Button);

export const App = ({ tags }) => {
  useInitialize({
    pathname: '/home',
    tags,
  })

  return (
    <Box >
      <CssBaseline />
      <Paper elevation={0} >
        <TrackingButton
          variant="contained"
          identifier='home-next-step'
          onClick={() => {
            console.log('click')
          }}
        >
          Next step
        </TrackingButton>
      </Paper>
    </Box>
  )
};

export default App
