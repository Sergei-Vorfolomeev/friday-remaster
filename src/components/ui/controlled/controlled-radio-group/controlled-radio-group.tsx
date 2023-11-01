import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'

type ControlledRadioGroupProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'name' | 'control'
> &
  RadioGroupProps

export const ControlledRadioGroup = <T extends FieldValues>({
  options,
  control,
  name,
}: ControlledRadioGroupProps<T>) => {
  const { field } = useController({ name, control })

  return <RadioGroup options={options} {...field} />
}
