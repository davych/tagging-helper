import * as React from 'react';
import Box from '@mui/material/Box';
import Divide from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { withTaggingClickable, useInitialize } from '../../../src/react';
import { Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const TrackingButton = withTaggingClickable(Button);
const TrackingDeleteIcon = withTaggingClickable(DeleteIcon);


export const App = ({ tags }) => {
  useInitialize({
    pathname: '/home',
    tags,
  })

  return (
    <Box >
      <CssBaseline />
      <Paper elevation={0} >
        <Accordion expanded>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Normal button case</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TrackingButton
              variant="contained"
              identifier='home-next-step'
              onClick={() => {
                console.log('click -> home-next-step')
              }}
            >
              Next step
            </TrackingButton>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Normal Icon case</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TrackingDeleteIcon
              style={{ cursor: "pointer" }}
              identifier='home-delete-item'
              onClick={() => {
                console.log('click -> delete item')
              }} />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Dynamic case</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TrackingButton
              variant="contained"
              identifier='home-choose-product'
              data={{ product: 'product1' }}
              onClick={() => {
                console.log('click -> choose product1')
              }}
            >
              Choose product1
            </TrackingButton>
            <Divide style={{margin: "20px 0"}} />
            <TrackingButton
              variant="contained"
              identifier='home-choose-product'
              data={{ product: 'product2' }}
              onClick={() => {
                console.log('click -> choose product2')
              }}
            >
              Choose product2
            </TrackingButton>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  )
};

export default App
