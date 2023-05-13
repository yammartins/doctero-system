import { useState, ReactNode } from 'react'

import { Text } from './Text'
import classNames from 'classnames'

export interface TooltipProps {
  children: ReactNode
  label: string
  direction?: 'left' | 'top' | 'right' | 'bottom'
  size?: 'xs' | 'sm' | 'base' | 'md' | 'lg'
}

export function Tooltip({
  children,
  label,
  direction = 'left',
  size = 'base',
}: TooltipProps) {
  const [show, onShow] = useState(false)

  const tooltipDirection = {
    left: 'left-full animate-slideRightAndFade',
    top: 'top-full animate-slideDownAndFade',
    right: 'right-full animate-slideLeftAndFade',
    bottom: 'bottom-full animate-slideUpAndFade',
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
      'tooltip relative flex-col transition z-[99]',
    ),
    bubble: classNames(
      direction && tooltipDirection[direction],
      size && tooltipSize[size],
      show && 'opacity-100 pointer-events-auto',
      'tooltip-bubble absolute opacity-0 pointer-events-none rounded-sm bg-gray-600 p-2 items-center justify-center',
    ),
  }

  return (
    <div
      className={styled.base}
      onMouseEnter={() => onShow(true)}
      onMouseLeave={() => onShow(false)}
    >
      <div className="relative w-40">
        <div
          data-direction={direction}
          className={`animate-slideDownAndFade ${styled.bubble}`}
        >
          <Text label={label} className="text-black" />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  )
}
