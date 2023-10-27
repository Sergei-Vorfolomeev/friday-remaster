import s from './check-email.module.scss'

import { EmailIcon } from '@/assets/icons/email'
import { Button, Card, Typography } from '@/components/ui'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Check Email
      </Typography>
      <div className={s.iconContainer}>
        <EmailIcon />
      </div>
      <Typography variant={'body-2'} className={s.instructions}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth className={s.signInLink}>
        Back to Sign In
      </Button>
    </Card>
  )
}
