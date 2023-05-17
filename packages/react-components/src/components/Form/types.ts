import { InputHTMLAttributes, ReactNode } from 'react'

export interface BaseProps {
  label: string
  error?: string
  children?: ReactNode
  loading?: boolean
  isFull?: boolean
  focus?: boolean
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    BaseProps {
  name: string
}
