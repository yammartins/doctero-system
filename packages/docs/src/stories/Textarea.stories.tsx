import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, Box, type TextAreaProps } from '@doctero-ui/react-components'

export default {
  title: 'Form/Textarea',
  component: TextArea,
  args: {
    name: 'doctero',
    label: 'Doctero UI - Textarea',
    placeholder: 'Insira um texto qualquer ...',
    loading: false,
    error: '',
    type: 'text',
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}
