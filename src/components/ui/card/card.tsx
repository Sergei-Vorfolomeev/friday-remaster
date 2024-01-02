import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <div ref={ref} className={classNames.root}>
      {children}
    </div>
  )
})
