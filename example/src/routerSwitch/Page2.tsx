import * as React from 'react';
import {
  useNavigate,
} from "react-router-dom";
import { usePipeData } from '../../../src';

export default function Page2() {
  const [data, setData] = React.useState({ username: 'weeee' });

  const [value, setValue] = React.useState('weeee');
  usePipeData('/page2', data)

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