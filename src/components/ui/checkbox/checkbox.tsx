import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/common/icons/checked-icon'
import { Typography } from '@/components/ui/typography'

type CheckboxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  className?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  label = '',
  checked,
  onChange,
  disabled,
  required,
  className,
}) => {
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
              onCheckedChange={onChange}
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
