import { TextField } from '@/components/ui'

export function App() {
  return (
    <TextField
      variant={'inputWithIcon'}
      label={'label'}
      placeholder={'Input'}
      disabled={false}
      onEnter={() => {}}
    />
  )
}
