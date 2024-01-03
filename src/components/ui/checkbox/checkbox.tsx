import { ElementRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import Check from '@/assets/icons/check'
import { Typography } from '@/components/ui/typography'

type CheckboxProps = {
  checked?: boolean
  className?: string
  label?: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
  id?: string
  position?: 'left' | 'right'
  required?: boolean
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, label, onChange, className, disabled, id, position = 'left', required }, ref) => {
    const classNames = {
      container: clsx(s.container, className),
      root: s.root,
      label: clsx(s.label, disabled && s.disabled),
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
      indicator: s.indicator,
    }

    return (
      <div className={classNames.container}>
        <LabelRadix.Root asChild>
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            <div className={classNames.buttonWrapper}>
              <CheckboxRadix.Root
                ref={ref}
                checked={checked}
                className={classNames.root}
                disabled={disabled}
                id={id}
                onCheckedChange={onChange}
                required={required}
              >
                {checked && (
                  <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                    <Check />
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
)
