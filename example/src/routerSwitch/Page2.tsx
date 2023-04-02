import * as React from 'react';
import {
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>hello, this is page2</h1>
    </div>
  )
}