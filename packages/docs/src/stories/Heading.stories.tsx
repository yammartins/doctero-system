import type { Meta, StoryObj } from '@storybook/react'
import { Box, Heading, type HeadingProps } from '@doctero-ui/react-components'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    align: 'left',
  },
  argTypes: {
    type: {
      options: ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select',
      },
    },
    height: {
      options: ['xs', 'sm', 'base', 'md', 'lg', 'xl'],
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    type: 'h2',
    size: '2xl',
    align: 'left',
    weight: 'regular',
    height: 'base',
    family: 'roboto',
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Heading label="Doctero UI - Heading" />
          {Story()}
        </Box>
      )
    },
  ],
}
