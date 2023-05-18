import { Text } from '../Typograph'
import type { BaseProps } from './types'
import classNames from 'classnames'

export function Base({
  label,
  error,
  loading,
  isFull,
  focus,
  children,
}: BaseProps) {
  const styled = {
    base: classNames('flex flex-col gap-2'),
    wrapper: classNames(
      isFull && 'w-full',
      error && 'base-form-error',
      loading && 'is-loading',
      'base-form-content px-4 pb-1 pt-5 relative flex flex-col items-start gap-3 bg-gray-400 border border-gray-600 rounded-sm',
    ),
    spinner: classNames(
      loading && 'absolute bottom-2 left-5',
      'flex h-5 w-5 animate-spin rounded-full border-2 border-gray-800 border-b-transparent',
    ),
  }
  return (
    <div className={styled.base}>
      <div className={styled.wrapper}>
        <Text
          htmlFor={label}
          label={label}
          type="label"
          weight="medium"
          className="pointer-events-none absolute left-4 top-3.5 text-sm transition-all duration-300"
        />

        {children}

        {loading && <div className={styled.spinner} />}
      </div>

      <div className="flex w-full items-start pl-2">
        {error && (
          <Text
            type="span"
            weight="medium"
            size="sm"
            className="text-danger-600"
          >
            {error}
          </Text>
        )}
      </div>
    </div>
  )
}
