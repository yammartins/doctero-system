import { Base } from '../base'
import { TextAreaProps } from '../types'

export function TextArea({ name, label, ...rest }: TextAreaProps) {
  return (
    <Base {...rest} label={label}>
      <textarea
        {...rest}
        name={name}
        id={label}
        className="w-full rounded-sm border-none bg-transparent pt-1 text-base text-gray-800 outline-none placeholder:opacity-0"
      />
    </Base>
  )
}
