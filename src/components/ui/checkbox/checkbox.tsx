import { ComponentPropsWithoutRef, FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/common/icons/checked-icon'
import { Typography } from '@/components/ui/typography'

type CheckboxProps = {
  checked?: boolean
  onCheckedChange?: (value: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const Checkbox: FC<
  CheckboxProps & Omit<ComponentPropsWithoutRef<'input'>, keyof CheckboxProps>
> = ({ label = '', checked, onCheckedChange, disabled, required, className }) => {
  const classNames = {
    container: clsx(s.container, className),
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    root: s.root,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root asChild htmlFor={'c1'}>
        <Typography variant={'body-2'} className={classNames.label} as={'label'}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              id="c1"
              className={classNames.root}
              checked={checked}
              onCheckedChange={onCheckedChange}
              required={required}
              disabled={disabled}
            >
              {checked && (
                <CheckboxRadix.Indicator forceMount className={classNames.indicator}>
                  <CheckedIcon disabled={disabled} />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
