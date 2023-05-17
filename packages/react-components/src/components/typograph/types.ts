import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'

export interface TextProps extends LabelHTMLAttributes<HTMLParagraphElement> {
  label?: string
  family?: 'jakarta' | 'poppins' | 'red-hat' | 'roboto'
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'black'
  height?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  type?: 'small' | 'span' | 'strong' | 'label' | 'b' | 'i' | 'p'
  align?: 'left' | 'center' | 'right'
  children?: ReactNode
}

export interface HeadingProps extends HTMLAttributes<HTMLParagraphElement> {
  label?: string
  family?: 'jakarta' | 'poppins' | 'red-hat' | 'roboto'
  size?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'black'
  height?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl'
  type?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'
  align?: 'left' | 'center' | 'right'
  children?: ReactNode
}
