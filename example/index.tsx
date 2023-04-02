
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './src/routerSwitch'
ReactDOM.render(<BrowserRouter><App tags={[]} /></BrowserRouter>, document.getElementById('root'));
