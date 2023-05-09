import '@doctero-ui/react-components/src/styles/main.css'
import { Preview } from '@storybook/react'

import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;