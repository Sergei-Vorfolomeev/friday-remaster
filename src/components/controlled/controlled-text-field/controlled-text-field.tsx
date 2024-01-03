import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'value' | 'onChange'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  shouldUnregister,
  rules,
  disabled,
  ...restTextFieldProps
}: ControlledTextFieldProps<T>) => {
  const {
    field: { value, onChange, ...field },
  } = useController({ control, name, defaultValue, shouldUnregister, rules, disabled })

  return <TextField {...restTextFieldProps} {...field} value={value} onChange={onChange} />
}
