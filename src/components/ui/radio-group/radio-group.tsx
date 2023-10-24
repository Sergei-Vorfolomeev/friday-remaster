import { ComponentPropsWithoutRef } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui'

export type RadioGroupProps = {
  options: string[]
  disabled?: boolean
} & ComponentPropsWithoutRef<'button'>

export const RadioGroup = ({ options, disabled = false }: RadioGroupProps) => {
  const classNames = {
    root: s.root,
    item: clsx(s.item, disabled && s.disabled),
    indicator: clsx(s.indicator, disabled && s.disabled),
    label: s.label,
    indicatorBox: clsx(s.indicatorBox, disabled && s.disabled),
    itemBox: s.itemBox,
  }

  return (
    <form>
      <RadioGroupRadix.Root
        className={classNames.root}
        defaultValue="default"
        aria-label="View density"
      >
        {options.map((el, index) => {
          return (
            <div key={index} className={classNames.itemBox}>
              <div className={classNames.indicatorBox}>
                <RadioGroupRadix.Item className={classNames.item} value={el} id={el}>
                  <RadioGroupRadix.Indicator className={classNames.indicator} />
                </RadioGroupRadix.Item>
              </div>
              <Typography as={'label'} variant={'body-2'} className={classNames.label} htmlFor={el}>
                {el}
              </Typography>
            </div>
          )
        })}
      </RadioGroupRadix.Root>
    </form>
  )
}
