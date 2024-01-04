import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './recover-password.module.scss'

import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type RecoverPasswordProps = {
  onSubmit: (data: FormValues) => void
}

type FormValues = {
  email: string
}

const schema = z.object({
  email: z.string().email({ message: 'Invalid Email' }),
})

export const RecoverPassword = ({ onSubmit }: RecoverPasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <ControlledTextField
          name={'email'}
          label={'Email'}
          control={control}
          containerProps={{ className: s.email }}
          errorMessage={errors.email?.message}
        />
        <Typography variant={'body2'} className={s.instruction}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button type={'submit'}>Send Instructions</Button>
      </form>
      <Typography variant={'body2'} className={s.caption}>
        Did you remember your password?
      </Typography>
      <Typography as={'a'} href={''} variant={'h3'} className={s.logInLink}>
        Try logging in
      </Typography>
    </Card>
  )
}
