import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'

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

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseProps {
  name: string
}
