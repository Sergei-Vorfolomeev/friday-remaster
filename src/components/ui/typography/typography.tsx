import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type TypographyType<T extends ElementType = 'span'> = {
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

export const Typography = <T extends ElementType = 'span'>({
  as,
  children,
  variant,
  className,
}: TypographyType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyType<T>>) => {
  const Component = (as as ElementType) || 'span'

  return <Component className={`${s[variant]} ${className}`}>{children}</Component>
}
