import '../styles/main.css'

import classNames from 'classnames'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  isIcon?: {
    icon: ReactNode
    direction: 'right' | 'left'
  }
  isFull?: boolean
}

export function Button({
  label,
  appearance = 'primary',
  size = 'md',
  isIcon,
  isFull = false,
  className,
  ...props
}: ButtonProps) {
  const styled = classNames(
    appearance && `button-${appearance}`,
    size && `button-${size}`,
    isFull && 'w-full',
    !isIcon && 'justify-center',
    isIcon && 'gap-2',
    className,
    'flex items-center rounded-sm transition-colors duration-200 border',
  )

  return (
    <button className={styled} {...props}>
      {isIcon && isIcon.direction === 'left' && <>{isIcon.icon}</>}
      {label}
      {isIcon && isIcon.direction === 'right' && <>{isIcon.icon}</>}
    </button>
  )
}
