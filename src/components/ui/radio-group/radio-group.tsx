import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui/typography'

const RadioGroupRoot = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...restProps }, ref) => {
  return <RadioGroupPrimitive.Root ref={ref} {...restProps} className={clsx(s.root, className)} />
})

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, value, ...restProps }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      className={clsx(s.item, className)}
      {...restProps}
    >
      <div className={s.icon}></div>
    </RadioGroupPrimitive.Item>
  )
})

type Option = {
  value: string
  label: string
}

export type RadioGroupProps = Omit<
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
  'children'
> & {
  errorMessage?: string
  options: Option[]
}

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ errorMessage, options, ...restProps }, ref) => {
    return (
      <RadioGroupRoot {...restProps} ref={ref}>
        {options.map(option => {
          return (
            <div key={option.value} className={s.label}>
              <RadioGroupItem id={option.value} value={option.value} />
              <Typography as={'label'} variant={'body2'} htmlFor={option.value}>
                {option.label}
              </Typography>
            </div>
          )
        })}
      </RadioGroupRoot>
    )
  }
)

export { RadioGroup, RadioGroupRoot, RadioGroupItem }
