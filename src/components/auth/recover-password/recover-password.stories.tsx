import { StoryObj } from '@storybook/react'

import { RecoverPassword } from './recover-password'

const meta = {
  title: 'Auth/RecoverPassword',
  component: RecoverPassword,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
