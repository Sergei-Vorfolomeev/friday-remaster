import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Checkbox, TextField } from '@/components/ui'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})

export const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label={'Email'} {...register('email')} errorMessage={errors.email?.message} />
      <TextField
        label={'Password'}
        {...register('password')}
        errorMessage={errors.password?.message}
      />
      <Checkbox
        checked={value}
        onCheckedChange={onChange}
        label={'Remember me'}
        {...register('rememberMe')}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
