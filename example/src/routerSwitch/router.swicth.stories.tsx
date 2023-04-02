import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RouterSwicth from '.'
export default {
  title: 'Example/Router swicth',
  component: RouterSwicth,
};


const Template = (args) => {
  return (
    <BrowserRouter>
      <RouterSwicth {...args} />
    </BrowserRouter>
  )
};
export const Default = Template.bind({});

Default.args = {
  tags: [
    {
      "tag": {
        "pageName": "Home",
        "channel": "Web",
        "pageType": "content",
        "section": "sectiontt"
      },
      "meta": {
        "name": "page1"
      },
      "identifier": "/page1",
      "type": "page",
      "event": "page_view",
      "rules": {
        "page": {
          "testTrack": "<pageName>:<channel>:<pageType>--<section>"
        }
      }
    },
    {
      "tag": {
        "buttonName": "testclick"
      },
      "meta": {
        "location": "page1"
      },
      "parent": "/page1",
      "identifier": "Page1-test-button",
      "type": "button",
      "event": "button_click"
    }
  ]
};



