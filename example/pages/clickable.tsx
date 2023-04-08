
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import * as tags from '../src/clickable/tags.json';
import App from '../src/clickable'

ReactDOM.render(<App tags={tags} />, document.getElementById('root'));
