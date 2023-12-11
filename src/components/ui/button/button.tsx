import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as, fullWidth, variant = 'primary', className, ...rest } = props
  const Component = as || 'button'

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
