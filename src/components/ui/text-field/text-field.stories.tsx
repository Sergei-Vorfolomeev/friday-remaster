import { StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/text-field/text-field'

const meta = {
  title: 'Components/UI/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'search'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
  },
}
