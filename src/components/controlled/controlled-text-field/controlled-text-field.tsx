import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui'

type ControlledTextFieldProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'name' | 'control'
> &
  Omit<TextFieldProps, 'value' | 'onValueChange'>

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    fieldState: { error },
    field: { value, onChange },
  } = useController({ name, control })

  return (
    <TextField
      {...rest}
      value={value}
      onValueChange={onChange}
      errorMessage={error?.message}
      id={name}
    />
  )
}
