import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './recover-password.module.scss'

import { ControlledTextField } from '@/components/controlled/controlled-text-field'
import { Button, Card, Typography } from '@/components/ui'

const schema = z.object({
  email: z.string().email('Invalid email'),
})

type ValuesType = z.infer<typeof schema>
type RecoverPasswordProps = {
  onSubmit: (values: ValuesType) => void
}

export const RecoverPassword = ({ onSubmit }: RecoverPasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ValuesType>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <ControlledTextField
            control={control}
            name={'email'}
            label={'Email'}
            errorMessage={errors.email?.message}
          />
        </div>
        <Typography variant={'body-2'} className={s.instructions}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button type={'submit'} fullWidth className={s.button}>
          Send Instructions
        </Button>
      </form>
      <Typography variant={'body-2'} className={s.caption}>
        Did you remember your password?
      </Typography>
      <Typography variant={'link-1'} as={'a'} href={'/sign-in'} className={s.loginLink}>
        Try logging in
      </Typography>
    </Card>
  )
}
