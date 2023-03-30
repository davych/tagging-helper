import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initialize} from '../src/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import tags from './tags.json';

function App() {
  
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
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
