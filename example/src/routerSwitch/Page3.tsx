import { CircularProgress } from '@mui/material';
import * as React from 'react';
import { useRuntimeData } from '../../../src/react';

export default function Page2() {
  const [data, setData] = React.useState<any>({});

  useRuntimeData('/page3', data);

  React.useEffect(() => {
    setTimeout(() => {
      setData({
        paidId: '123456'
      })
    }, 1500);
  }, []);

  return (
    <div>
      <h1>hello, this is page3, Got your paid ID successful - {data.paidId? data.paidId: <CircularProgress />}</h1>
    </div>
  )
}