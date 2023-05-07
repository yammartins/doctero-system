import { 
  colors,
  borderRadius,
  fonts,
  fontWeights,
  fontSize,
  lineHeight,
 } from '@doctero-ui/tokens'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/**/*.tsx",
    "./src/**/**/*.css"
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
}

