import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}
export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Password',
    type: 'password',
  },
}
export const Error: Story = {
  args: {
    label: 'Input with error',
    value: 'Wrong mesage',
    errorMessage: 'ErrorMessage',
  },
}
