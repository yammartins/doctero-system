import { themes } from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    },
    darkMode: {
      dark: { ...themes.dark, appBg: 'black' },
      current: 'dark',
      classTarget: 'html'
    }
  },
};

export default preview;
