import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui'

type ControlledTextFieldProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'name' | 'control'
> &
  Omit<TextFieldProps, 'value' | 'onValueChange'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
}: ControlledTextFieldProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({ control, name })

  return <TextField value={value} onValueChange={onChange} />
}
