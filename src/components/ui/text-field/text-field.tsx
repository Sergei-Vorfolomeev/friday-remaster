import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import Eye from '@/assets/icons/eye'
import EyeClose from '@/assets/icons/eye-close'
import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
  label?: string
  search?: boolean
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, labelProps, errorMessage, type, containerProps, className, onChange, search, ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(s.field, className, !!errorMessage && s.error, search && s.hasLeadingIcon),
      label: clsx(s.label, labelProps?.className),
      searchIcon: s.searchIcon,
      error: clsx(s.error),
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event)
    }

    const finalType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
      if (type === 'password' && showPassword) {
        return 'text'
      } else return type
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} variant={'body2'} className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {search && <Search className={classNames.searchIcon} />}
          <input
            ref={ref}
            className={classNames.field}
            type={finalType(type, showPassword)}
            onChange={handleChange}
            {...rest}
          />
          {type === 'password' && (
            <button
              className={s.showPassword}
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <EyeClose /> : <Eye />}
            </button>
          )}
        </div>

        {errorMessage && (
          <Typography variant={'error'} className={classNames.error}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
