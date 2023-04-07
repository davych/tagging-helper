import * as React from 'react';
import { useRuntimeData } from '../../../src/react';

export default function Page2() {
  const [data, setData] = React.useState({});

  const [value, setValue] = React.useState('');

  useRuntimeData('/page2', data);

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