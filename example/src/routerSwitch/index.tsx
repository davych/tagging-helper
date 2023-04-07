import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import tags from './tags';
import {
  Route,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import { useInitialize } from '../../../src/react';

import Page1 from './Page1';
import Page2 from './Page2';

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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            hello
          </Typography>
          <Box>
            <Button sx={{ color: '#fff' }} onClick={() => {
              navigate('/page1')
            }}>
              page1
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => {
              navigate('/page2')
            }}>
              page2
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
        </Routes>
      </Box>
    </Box>
  )
};

export default App
