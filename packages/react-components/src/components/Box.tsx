import { ReactNode } from 'react'

export interface BoxProps {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return (
    <div className="rounded-base border border-gray-400 bg-gray-300 p-4">
      {children}
    </div>
  )
}
