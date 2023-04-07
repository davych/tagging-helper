import * as React from 'react';
import {
  useNavigate,
} from "react-router-dom";
import { pipeRuntimeData } from '../../../src';

export default function Page2() {
  const [data, setData] = React.useState({username: 'hello'});

  const [value, setValue] = React.useState('hello');
  
  React.useEffect(() => {
    pipeRuntimeData('/page2', data)
  }, [data]);

  return (
    <div>
      <h1>hello, this is page2</h1>
      <input type="text" value={value} onChange={(e) => {
        setValue(e.target.value)
      }} />
      <button onClick={() => {
        setData({ username: value })
      }}>change user name</button>
    </div>
  )
}