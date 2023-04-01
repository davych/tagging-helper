import * as React from 'react';
import {
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>This is Page2</h1>
      <button onClick={() => navigate('/page1')}>Go to Page1</button>
    </div>
  )
}