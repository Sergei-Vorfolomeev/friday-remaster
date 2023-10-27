import { StoryObj } from '@storybook/react'

import { CheckEmail } from './check-email'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
