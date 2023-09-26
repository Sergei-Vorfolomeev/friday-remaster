import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <div ref={ref} className={classNames.root}>
      {children}
    </div>
  )
})
