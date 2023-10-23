import { ChangeEvent, ComponentPropsWithoutRef, useState, ComponentProps, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { EyeIcon } from '@/common/components/eye-icon'
import { Typography } from '@/components/ui'

export type TextFieldProps = {
  label?: string
  labelProps?: ComponentProps<'label'>
  containerProps?: ComponentProps<'div'>
  placeholder?: string
  className?: string
  errorMessage?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      labelProps,
      containerProps,
      placeholder,
      type,
      className,
      onChange,
      onValueChange,
      errorMessage = '',
      ...restProps
    }: TextFieldProps,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isHidden = type === 'password'
    const finalType = getFinalType(type, showPassword)

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      onValueChange?.(event.currentTarget.value)
    }

    const classNames = {
      root: s.root,
      label: clsx(s.label, labelProps?.className),
      fieldContainer: clsx(s.fieldContainer, containerProps?.className),
      field: clsx(s.field, errorMessage && s.error, className),
    }

    const handleOnEyeClick = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant="body-2" as={'label'} className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          <input
            ref={ref}
            type={finalType}
            className={classNames.field}
            placeholder={errorMessage ? errorMessage : placeholder}
            onChange={handleOnChange}
            {...restProps}
          />
          {isHidden && (
            <button onClick={handleOnEyeClick} className={s.showPassword}>
              <EyeIcon isHidden={showPassword} className={s.registrationEye} />
            </button>
          )}
          {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
        </div>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
