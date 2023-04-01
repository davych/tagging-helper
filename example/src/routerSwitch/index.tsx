import * as React from 'react';
import { useParams } from 'react-router-dom';
import tags from './tags';
import {
  Route,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import { initialize } from '../../../src';

import Page1 from './Page1';
import Page2 from './Page2';

export const App = () => {
  const location = useLocation();
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
  return (
    <Routes>
      <Route
        path="/page1"
        element={<Page1 />}
      />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  )
};

export default App
