import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Uncontrolled: Story = {
  args: {
    label: 'Click here',
    disabled: false,
    checked: false,
  },
}
