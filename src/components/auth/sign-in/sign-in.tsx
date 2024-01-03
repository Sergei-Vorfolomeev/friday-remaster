import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'

const signInSchema = z.object({
  email: z.string().email({ message: 'Wrong email' }),
  password: z.string().min(3, { message: 'Must be at least 3 symbols' }),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof signInSchema>

export const SignIn = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signInSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('email')} label={'Email'} errorMessage={errors.email?.message} />
        <TextField
          {...register('password')}
          label={'Password'}
          errorMessage={errors.password?.message}
        />
        <ControlledCheckbox control={control} name={'rememberMe'} label={'Remember me'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </Card>
  )
}