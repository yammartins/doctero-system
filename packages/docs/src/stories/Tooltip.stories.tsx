import type { Meta, StoryObj } from '@storybook/react'
import { ChartPolar } from '@phosphor-icons/react'
import {
  Text,
  Box,
  Tooltip,
  type TooltipProps,
} from '@doctero-ui/react-components'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  decorators: [
    (Story) => {
      return (
        <Box>
          <Tooltip direction="top" label="Tooltip">
            <div className="w-30 flex items-center gap-2 text-gray-700">
              <ChartPolar className="margin-0" size={24} />
              <Text className="text-black" label="Doctero UI" />
            </div>
            {Story()}
          </Tooltip>
        </Box>
      )
    },
  ],
}
