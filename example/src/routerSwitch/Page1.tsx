import * as React from 'react';
import {
  useNavigate,
  useLocation
} from "react-router-dom";
import { withTaggingClickable } from '../../../src/react'

const Button = (props: any) => {
  return <button {...props}>{props.children}</button>
}

const Icon = (props: any) => {
  return <div {...props}>{props.children}</div>
}

const MyButton = withTaggingClickable(Button);
const MyIcon = withTaggingClickable(Icon);

export default function Page1() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>hello, this is page1</h1>
      <MyButton
        identifier="test"
        onClick={() => {
          console.log('click--------》')
        }}
      >test</MyButton>

      <MyIcon
        identifier="icon-test"
        onClick={() => {
          console.log('click--------》')
        }}
      >icon</MyIcon>
    </div>
  )
}