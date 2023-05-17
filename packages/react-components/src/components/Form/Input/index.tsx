import { Base } from '../base'
import { InputProps } from '../types'

export function Input({ name, ...rest }: InputProps) {
  return (
    <Base {...rest}>
      <input
        {...rest}
        className="w-full rounded-sm border-none bg-transparent pt-1 text-base text-gray-800 outline-none placeholder:opacity-0"
        name={name}
      />
    </Base>
  )
}
