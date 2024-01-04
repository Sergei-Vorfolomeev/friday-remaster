import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './new-password.module.scss'

import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const schema = z.object({
  password: z.string().min(3),
})

type NewPasswordProps = { onSubmit: (data: FormValues) => void }
type FormValues = z.infer<typeof schema>

export const NewPassword = ({ onSubmit }: NewPasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      password: '',
    },
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <ControlledTextField
          name={'password'}
          label={'Password'}
          control={control}
          type={'password'}
          containerProps={{ className: s.password }}
          errorMessage={errors.password?.message}
        />
        <Typography variant={'body2'} className={s.instruction}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type={'submit'}>Create New Password</Button>
      </form>
    </Card>
  )
}
