import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type ButtonPropsType<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  fullWidth,
  className,
  ...rest
}: ButtonPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonPropsType<T>>) => {
  const Component = as || 'button'

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest}>
      Button
    </Component>
  )
}
