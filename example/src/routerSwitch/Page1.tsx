import * as React from 'react';
import {
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Page1() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>hello, this is page1</h1>
    </div>
  )
}