import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      })
    }
  })

type SignUpProps = {
  onSubmit: (data: FormValues) => void
}

type FormValues = z.infer<typeof signUpSchema>

export const SignUp = ({ onSubmit }: SignUpProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
    defaultValues: { email: '', password: '', confirmPassword: '' },
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <ControlledTextField
          name={'email'}
          label={'Email'}
          control={control}
          containerProps={{ className: s.email }}
          errorMessage={errors.email?.message}
        />
        <ControlledTextField
          name={'password'}
          label={'Password'}
          control={control}
          containerProps={{ className: s.password }}
          type={'password'}
          errorMessage={errors.password?.message}
        />
        <ControlledTextField
          name={'confirmPassword'}
          label={'Confirm password'}
          control={control}
          containerProps={{ className: s.confirmPassword }}
          type={'password'}
          errorMessage={errors.confirmPassword?.message}
        />
        <Button type={'submit'} fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography variant={'body2'} className={s.haveAccount}>
        Already have an account?
      </Typography>
      <Typography as={'a'} href={''} variant={'h3'} className={s.signInLink}>
        Sign In
      </Typography>
    </Card>
  )
}
