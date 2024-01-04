import type { Meta, StoryObj } from '@storybook/react'

import { RecoverPassword } from '@/components/auth/recover-password'

const meta = {
  title: 'Auth/RecoverPassword',
  component: RecoverPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof RecoverPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
