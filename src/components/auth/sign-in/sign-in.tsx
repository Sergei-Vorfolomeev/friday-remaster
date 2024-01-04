import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const signInSchema = z.object({
  email: z.string().email({ message: 'Wrong email' }),
  password: z.string().min(3, { message: 'Must be at least 3 symbols' }),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof signInSchema>

type SignInProps = {
  onSubmit: (data: FormValues) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const {
    control,
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

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <ControlledTextField
          control={control}
          name={'email'}
          label={'Email'}
          errorMessage={errors.email?.message}
          containerProps={{ className: s.email }}
        />
        <ControlledTextField
          control={control}
          name={'password'}
          label={'Password'}
          type={'password'}
          errorMessage={errors.password?.message}
          containerProps={{ className: s.password }}
        />
        <ControlledCheckbox
          control={control}
          name={'rememberMe'}
          label={'Remember me'}
          className={s.rememberMe}
        />
        <Typography as={'a'} href={''} variant={'body2'} className={s.forgotPasswordLink}>
          Forgot password?
        </Typography>
        <Button type={'submit'}>Submit</Button>
      </form>
      <Typography variant={'body2'} className={s.haveAccount}>
        Do you have an account?
      </Typography>
      <Typography as={'a'} href={''} variant={'h3'} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
