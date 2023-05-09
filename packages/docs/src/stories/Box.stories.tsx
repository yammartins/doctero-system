import type { Meta, StoryObj } from '@storybook/react'
import { Text, Box, type BoxProps } from '@doctero-ui/react-components' 

export default {
  title: 'Typography/Box',
  component: Box,
  args: {
    children: (
      <Text label="Componente de Box - Doctero UI" />  
    )
  },  
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}