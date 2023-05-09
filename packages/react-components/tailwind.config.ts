import { Config } from 'tailwindcss'

import { 
  colors,
  borderRadius,
  fonts,
  fontWeights,
  fontSize,
  lineHeight,
 } from '@doctero-ui/tokens'

export default {
  content: [
    "./src/components/*.tsx",
  ],
  theme: {
    colors,
    borderRadius,
    fontFamily: fonts,
    fontWeight: fontWeights,
    fontSize,
    lineHeight,
    
    extend: {},
  },
  plugins: [],
} as Config

