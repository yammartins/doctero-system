import { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}',
    '../react-components/src/**/*.{ts,tsx}',
    '../react-components/src/**/**/*.{ts,tsx}',
  ],
  theme: {},
  plugins: [],
  presets: [require('@doctero-ui/react-components/tailwind.config')],
} as Config
