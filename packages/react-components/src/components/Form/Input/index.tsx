import { Base } from '../base'
import { InputProps } from '../types'

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <Base label={label} {...rest}>
      <input
        {...rest}
        name={name}
        id={label}
        className="w-full rounded-sm border-none bg-transparent pt-1 text-base text-gray-800 outline-none placeholder:opacity-0"
      />
    </Base>
  )
}
