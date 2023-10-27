import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button, Card, Typography } from '@/components/ui'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})

type FormValues = z.infer<typeof loginSchema>

type SignInProps = {
  onSubmit: (data: FormValues) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <ControlledTextField
            label={'Email'}
            name={'email'}
            control={control}
            errorMessage={errors.email?.message}
          />
          <ControlledTextField
            label={'Password'}
            name={'password'}
            control={control}
            errorMessage={errors.password?.message}
          />
        </div>
        <ControlledCheckbox
          control={control}
          name={'rememberMe'}
          label={'Remember me'}
          className={s.checkbox}
        />
        <Typography
          as={'a'}
          href="/recover-password"
          variant={'body-2'}
          className={s.forgotPasswordLink}
        >
          Forgot Password?
        </Typography>
        <Button type={'submit'} fullWidth>
          Sign In
        </Button>
      </form>
      <Typography variant={'body-2'} className={s.caption}>
        Don&apos;t have an account?
      </Typography>
      <Typography as={Link} to="/sign-up" variant={'body-2'} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
