import * as React from 'react';
import {
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Page1() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>This is page1</h1>
      <button onClick={() => navigate('/page2')}>Go to page2</button>
    </div>
  )
}