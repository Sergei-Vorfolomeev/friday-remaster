import { NewPassword } from '@/components/auth/new-password'
import { RecoverPassword } from '@/components/auth/recover-password'
import { SignIn } from '@/components/auth/sign-in/sign-in'
import { SignUp } from '@/components/auth/sign-up'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup } from '@/components/ui/radio-group/radio-group'
import { TextField } from '@/components/ui/text-field'

const options = [
  {
    value: '1',
    label: 'first',
  },
  {
    value: '2',
    label: 'second',
  },
  {
    value: '3',
    label: 'third',
  },
]

export function App() {
  return <NewPassword onSubmit={() => {}} />
}
