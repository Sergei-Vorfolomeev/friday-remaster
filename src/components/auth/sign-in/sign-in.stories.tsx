import { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/components/auth/sign-in'

const meta = {
  title: 'Auth/SignIn',
  component: SignIn,
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
