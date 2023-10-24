import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/radio-group/radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    options: ['option-1', 'option-2', 'option-3'],
  },
}
