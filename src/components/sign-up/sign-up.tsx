import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { ControlledTextField } from '@/components/controlled/controlled-text-field'
import { Button, Card, Typography } from '@/components/ui'

const signUpSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(3, 'Password should have at least 3 symbols'),
    passwordConfirmation: z.string().nonempty('Confirm your password'),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.passwordConfirmation) {
      ctx.addIssue({
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
        path: ['passwordConfirmation'],
      })
    }
  })

type ValuesType = z.infer<typeof signUpSchema>
type SignUpProps = {
  onSubmit: (data: Omit<ValuesType, 'passwordConfirmation'>) => void
}

export const SignUp = ({ onSubmit }: SignUpProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValuesType>({
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <ControlledTextField
            name={'email'}
            control={control}
            label={'Email'}
            errorMessage={errors.email?.message}
          />
          <ControlledTextField
            name={'password'}
            control={control}
            label={'Password'}
            errorMessage={errors.password?.message}
          />
          <ControlledTextField
            name={'passwordConfirmation'}
            control={control}
            label={'Confirm Password'}
            errorMessage={errors.passwordConfirmation?.message}
          />
        </div>
        <Button type={'submit'} fullWidth className={s.button}>
          Sign Up
        </Button>
      </form>
      <Typography variant={'body-2'} className={s.caption}>
        Already have an account?
      </Typography>
      <Typography as={'a'} href="/sign-in" variant={'body-2'} className={s.signInLink}>
        Sign In
      </Typography>
    </Card>
  )
}
