
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import * as tags from '../src/routerSwitch/tags.json';
import App from '../src/routerSwitch'

ReactDOM.render(<HashRouter><App tags={tags} /></HashRouter>, document.getElementById('root'));
