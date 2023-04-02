import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
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
import { initialize, updateTags } from '../../../src';

import Page1 from './Page1';
import Page2 from './Page2';

export const App = ({ tags }) => {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/page1');
  }, []);
  React.useEffect(() => {
    initialize({
      pathname: location.pathname,
      tags,
      appInfos: {
        name: 'example',
      },
      userSegments: {
        userId: '123',
      }
    })
  }, [location]);

  React.useEffect(() => {
    updateTags(tags)
  }, [tags]);

  return (
    <Box >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            hello
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
