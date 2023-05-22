import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react'
type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
export interface IconProps extends ComponentPropsWithRef<'svg'> {
  alt?: string
  color?: string
  size?: string | number
  weight?: IconWeight
  mirrored?: boolean
}
export type Icon = ForwardRefExoticComponent<IconProps>
