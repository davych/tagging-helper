import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Route,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import { useInitialize } from '../../../src/react';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export const App = ({ tags }) => {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/page1');
  }, []);
  
  const appInfos = {
    region: 'cn'
  };
  useInitialize({
    pathname: location.pathname,
    tags,
    appInfos
  })

  return (
    <Box >
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Box>
            <Button sx={{ color: '#fff' }} onClick={() => {
              navigate('/page1')
            }}>
              Normal-page1
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => {
              navigate('/page2')
            }}>
              Normal-page2
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => {
              navigate('/page3')
            }}>
              Dynamic-page3
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Routes>
          <Route
            path="/page1"
            element={<Page1 />}
          />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Box>
    </Box>
  )
};

export default App
