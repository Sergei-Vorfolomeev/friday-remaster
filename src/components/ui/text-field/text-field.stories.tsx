import { StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/text-field/text-field'

const meta = {
  title: 'Components/UI/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search'],
    },
    type: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}
