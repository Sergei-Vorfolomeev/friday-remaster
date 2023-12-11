import { ComponentPropsWithoutRef } from 'react'

import s from './text-field.module.scss'

import { EyeIcon } from '@/assets/icons/eyeIcon'

type TextFieldProps = {
  label: string
  errorMessage: string
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>
export const TextField = ({
  variant = 'default',
  className,
  ...rest
}: TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>) => {
  return (
    <div className={s.container}>
      <input
        className={`${s[variant]} ${className}`}
        type={variant === 'search' ? 'search' : 'text'}
        {...rest}
      />
      <EyeIcon className={s.icon} />
    </div>
  )
}
