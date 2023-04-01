import * as React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import RouterSwicth from './'
export default {
  title: 'Example/Router swicth',
  component: RouterSwicth, 
  decorators: [withRouter],
};


export const Default = () => <RouterSwicth />;

Default.story = {
  parameters: {
    reactRouter: {
      browserPath: '/page1',
    }
  }
};


export const SpecificPath = () => <RouterSwicth />;

SpecificPath.story = {
  parameters: {
    reactRouter: {
      browserPath: '/page2',
    }
  }
}