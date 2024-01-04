import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group/radio-group'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'id' | 'name' | 'onChange'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, ...restFields },
    fieldState: { error },
  } = useController({ control, name })

  return (
    <RadioGroup {...restProps} {...restFields} onChange={onChange} errorMessage={error?.message} />
  )
}
