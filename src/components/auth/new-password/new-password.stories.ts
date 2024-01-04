import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from '@/components/auth/new-password'

const meta = {
  title: 'Auth/NewPassword',
  component: NewPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
