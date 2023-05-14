import { ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import classNames from 'classnames'

import { Text } from './Text'

export interface TooltipProps {
  children: ReactNode
  label: string
  direction?: 'left' | 'top' | 'right' | 'bottom'
  size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl'
}

export function Tooltip({
  children,
  label,
  direction = 'left',
  size = 'base',
}: TooltipProps) {
  const tooltipDirection = {
    left: 'data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade right-0',
    top: 'data-[state=delayed-open]:data-[side=top]:animate-slide-bottom-and-fade bottom-0',
    right:
      'data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade left-0',
    bottom:
      'data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade top-0',
  }

  const tooltipSize = {
    xs: 'w-20',
    sm: 'w-24',
    base: 'w-28',
    md: 'w-32',
    lg: 'w-36',
    xl: 'w-40',
  }

  const styled = {
    content: classNames(
      direction && tooltipDirection[direction],
      size && tooltipSize[size],
      'relative rounded-base bg-gray-800 p-2 text-gray-300 leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]',
    ),
  }

  return (
    <RadixTooltip.Provider delayDuration={300}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div>{children}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content side={direction} className={styled.content}>
            <Text align="center" label={label} />
            <RadixTooltip.Arrow className="fill-gray-800" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
