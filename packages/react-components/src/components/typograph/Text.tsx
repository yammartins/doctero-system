import { useCallback } from 'react'
import classNames from 'classnames'
import { TextProps } from './types'

export function Text({
  label,
  align = 'left',
  family = 'roboto',
  size = 'base',
  weight = 'regular',
  height = 'base',
  type = 'p',
  ...rest
}: TextProps) {
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
    rest,
  )

  const TextRender = useCallback(() => {
    if (type === 'small') return <small className={styled}>{label}</small>
    if (type === 'span') return <span className={styled}>{label}</span>
    if (type === 'strong') return <strong className={styled}>{label}</strong>
    if (type === 'label') return <label className={styled}>{label}</label>
    if (type === 'b') return <b className={styled}>{label}</b>
    if (type === 'i') return <i className={styled}>{label}</i>
    if (type === 'p') return <p className={styled}>{label}</p>

    return <p>{label}</p>
  }, [label, styled, type])

  return <TextRender />
}
