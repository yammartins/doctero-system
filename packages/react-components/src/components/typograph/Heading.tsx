import { useCallback } from 'react'
import classNames from 'classnames'
import { HeadingProps } from './types'

export function Heading({
  label,
  align = 'left',
  family = 'roboto',
  size = '2xl',
  weight = 'regular',
  height = 'base',
  type = 'h2',
  ...rest
}: HeadingProps) {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const lineHeight = {
    xs: 'leading-xs',
    sm: 'leading-sm',
    base: 'leading-base',
    md: 'leading-md',
    lg: 'leading-lg',
    xl: 'leading-xl',
  }

  const textSizes = {
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
    rest,
  )

  const TextRender = useCallback(() => {
    if (type === 'h6') return <h6 className={styled}>{label}</h6>
    if (type === 'h5') return <h5 className={styled}>{label}</h5>
    if (type === 'h4') return <h4 className={styled}>{label}</h4>
    if (type === 'h3') return <h3 className={styled}>{label}</h3>
    if (type === 'h2') return <h2 className={styled}>{label}</h2>
    if (type === 'h1') return <h1 className={styled}>{label}</h1>

    return <h2>{label}</h2>
  }, [label, styled, type])

  return <TextRender />
}
