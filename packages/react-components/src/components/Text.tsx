import { useCallback } from "react"
import classNames from 'classnames'

export interface TextProps {
  label: string;
  className?: string;
  family?: 'jakarta' | 'poppins' | 'red-hat' | 'roboto';
  size?: 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'black',
  height?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  type?: 'small' | 'span' | 'strong' | 'b' | 'i' | 'p' | 'h6' | 'h5' | 'h4';
  align?: 'left' | 'center' | 'right'
}

export function Text({
  label,
  align = 'left',
  family = 'roboto',
  size = 'base',
  weight = 'regular',
  height = 'base',
  type = 'p',
  className
}: TextProps) {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right' ,
  }

  const lineHeight = {
    xs: 'leading-xs',
    sm: 'leading-sm',
    base: 'leading-base',
    md: 'leading-md',
    lg: 'leading-lg',
    xl: 'leading-xl',
    '2xl': 'leading-2xl',
    '3xl': 'leading-3xl',
    '4xl': 'leading-4xl',
    '5xl': 'leading-5xl',
    '6xl': 'leading-6xl',
    '7xl': 'leading-7xl',
    '8xl': 'leading-8xl',
    '9xl': 'leading-9xl',
  }

  const textSizes = {
    xxs: 'text-xxs',
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  }

  const textWeight = {
    regular: 'regular',
    medium: 'medium',
    semibold: 'semibold',
    bold: 'bold',
    black: 'black',
  }

  const fontFamily = {
    jakarta: 'font-jakarta',
    poppins: 'font-poppins',
    'red-hat': 'font-red-hat',
    roboto: 'font-roboto',
  }

  const styled = classNames(
    textAlign[align],
    lineHeight[height],
    textSizes[size],
    textWeight[weight],
    fontFamily[family],
    className
  )
  
  const TextRender = useCallback(() => {
    if (type === 'small') return <small className={styled}>{label}</small>
    if (type === 'span') return <span className={styled}>{label}</span>
    if (type === 'b') return <b className={styled}>{label}</b>
    if (type === 'i') return <i className={styled}>{label}</i>
    if (type === 'p') return <p className={styled}>{label}</p>
    if (type === 'h6') return <h6 className={styled}>{label}</h6>
    if (type === 'h5') return <h5 className={styled}>{label}</h5>
    if (type === 'h4') return <h4 className={styled}>{label}</h4>

    return <p>{label}</p>
  }, [])  
    
  return (
    <TextRender />
  )    
}