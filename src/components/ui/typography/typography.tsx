import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps>
) => {
  const { as, variant = 'body1', className, children, ...rest } = props
  const Component = as || 'p'
  const classNames = clsx(s.text, s[variant], className)

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}
