import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

type TypographyType<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  variant:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body-1'
    | 'body-2'
    | 'subtitle-1'
    | 'subtitle-2'
    | 'caption'
    | 'overline'
    | 'link-1'
    | 'link-2'
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
  as,
  children,
  variant,
  className,
  ...restProps
}: TypographyType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyType<T>>) => {
  const classNames = clsx(s[variant], className)
  const Component = (as as ElementType) || 'p'

  return (
    <Component className={classNames} {...restProps}>
      {children}
    </Component>
  )
}
