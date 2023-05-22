import type { Meta, StoryObj } from '@storybook/react'
import { Button, Box, type ButtonProps } from '@doctero-ui/react-components'
import { ArrowCircleUp } from '@phosphor-icons/react'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'tertiary', 'outline'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    name: 'doctero',
    label: 'Submit',
    placeholder: 'Insira um texto qualquer ...',
    appearance: 'primary',
    disabled: true,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    name: 'doctero',
    label: 'Submit',
    placeholder: 'Insira um texto qualquer ...',
    appearance: 'secondary',
    isIcon: {
      icon: <ArrowCircleUp width={20} height={20} weight="bold" />,
      direction: 'left',
    },
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    name: 'doctero',
    label: 'Submit',
    placeholder: 'Insira um texto qualquer ...',
    appearance: 'tertiary',
    isFull: true,
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <div className="max-w-[15rem]">{Story()}</div>
        </Box>
      )
    },
  ],
}
