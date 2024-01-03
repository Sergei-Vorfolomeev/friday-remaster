import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onCheckedChange' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...restCheckboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { value, onChange, ...field },
  } = useController({ control, name, defaultValue, rules, shouldUnregister, disabled })

  return <Checkbox {...restCheckboxProps} {...field} checked={value} onCheckedChange={onChange} />
}
