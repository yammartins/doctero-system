import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
  "../src/pages/**/*.stories.mdx", 
  "../src/pages/**/**/*.stories.mdx",  
  "../src/stories/**/*.stories.tsx",
],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-styling"
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
