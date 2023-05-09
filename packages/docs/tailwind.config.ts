const theme = require('@doctero-ui/react-components/tailwind.config')

import { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/**/**/*.{ts,tsx}",
    "../react-components/src/**/*.{ts,tsx}",
  ],
  theme,
  plugins: []
} as Config 