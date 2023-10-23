import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/controlled/controlled-text-field'
import { Button } from '@/components/ui'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField
        label={'Email'}
        control={control}
        name={'email'}
        errorMessage={errors.email?.message}
      />
      <ControlledTextField
        label={'Password'}
        control={control}
        name={'password'}
        errorMessage={errors.password?.message}
      />
      <ControlledCheckbox control={control} name={'rememberMe'} label={'Remember me'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
