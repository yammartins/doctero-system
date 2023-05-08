import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '@doctero-ui/react-components' 

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    label: 'Vasco da Gama'
  }  
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    size: 'md',
    family: 'red-hat'
  }
}