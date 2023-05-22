import { HTMLAttributes, ReactNode } from 'react'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Box({ children, className, ...rest }: BoxProps) {
  return (
    <div
      {...rest}
      className={`rounded-base border border-gray-400 bg-gray-300 p-4 ${className}`}
    >
      {children}
    </div>
  )
}
