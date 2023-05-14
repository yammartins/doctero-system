import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '@doctero-ui/react-components'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    label: 'Insira um texto qualquer...',
  },
  argTypes: {
    type: {
      options: [
        'small',
        'span',
        'strong',
        'label',
        'b',
        'i',
        'p',
        'h6',
        'h5',
        'h4',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'base',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
    height: {
      options: [
        'xs',
        'sm',
        'base',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
    family: {
      options: ['jakarta', 'poppins', 'red-hat', 'roboto'],
      control: {
        type: 'inline-radio',
      },
    },
    weight: {
      options: ['regular', 'medium', 'semibold', 'bold', 'black'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    type: 'p',
    size: 'base',
    align: 'left',
    weight: 'regular',
    height: 'base',
    family: 'red-hat',
  },
}
