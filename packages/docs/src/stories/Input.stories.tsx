import type { Meta, StoryObj } from '@storybook/react'
import { Input, Box, type InputProps } from '@doctero-ui/react-components'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    name: 'doctero',
    label: 'Doctero UI - Input',
    placeholder: 'Insira um texto qualquer ...',
    loading: false,
    type: 'text',
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {}
