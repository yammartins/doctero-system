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
  content: ['./src/components/*.tsx'],
  theme: {
    colors,
    borderRadius,
    fontFamily: fonts,
    fontWeight: fontWeights,
    fontSize,
    lineHeight,

    extend: {
      keyframes: {
        'slide-bottom-and-fade': {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left-and-fade': {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up-and-fade': {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right-and-fade': {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-bottom-and-fade':
          'slide-bottom-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade':
          'slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade':
          'slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade':
          'slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionProperty: {
        position: 'left, top, right, bottom',
      },
    },
  },
  plugins: [],
}
