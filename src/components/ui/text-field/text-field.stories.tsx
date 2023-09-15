import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui'

const meta: Meta<typeof TextField> = {
  title: 'Components/textField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['input', 'inputWithIcon', 'search'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Input: Story = {
  args: {
    variant: 'input',
    label: 'input',
    placeholder: 'input',
  },
}
export const InputWithIcon: Story = {
  args: {
    variant: 'inputWithIcon',
    label: 'inputWithIcon',
    placeholder: 'inputWithIcon',
  },
}
export const Search: Story = {
  args: {
    variant: 'search',
    label: 'search',
    placeholder: 'search',
  },
}
