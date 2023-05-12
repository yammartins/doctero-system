import { useState, ReactNode } from 'react'

import { Text } from './Text'
import classNames from 'classnames'

export interface TooltipProps {
  children: ReactNode
  label: string
  direction: 'left' | 'top' | 'right' | 'bottom'
  size: 'xs' | 'sm' | 'base' | 'md' | 'lg'
}

export function Tooltip({ children, label, direction, size }: TooltipProps) {
  const [show, onShow] = useState(false)

  const tooltipDirection = {
    left: 'left-full animate-slideLeftAndFade',
    top: 'top-full animate-slideUpAndFade',
    right: 'right-full animate-slideRightAndFade',
    bottom: 'bottom-full animate-slideDownAndFade',
  }

  const tooltipSize = {
    xs: 'w-24',
    sm: 'w-28',
    base: 'w-32',
    md: 'w-36',
    lg: 'w-40',
  }

  const styled = {
    base: classNames(
      show && 'flex',
      'tooltip hidden relative h-10 w-10 transition-all',
    ),
    bubble: classNames(
      direction && tooltipDirection[direction],
      size && tooltipSize[size],
      show && 'flex',
      'tooltip-bubble transition hidden rounded-sm bg-gray-600 p-2 items-center justify-center',
    ),
  }

  return (
    <div
      className={styled.base}
      onMouseEnter={() => onShow(true)}
      onMouseLeave={() => onShow(false)}
    >
      <div className="">
        <div className={styled.bubble}>
          <Text label={label} className="text-gray-200" />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  )
}
