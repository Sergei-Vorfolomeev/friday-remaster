import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/radio-group/radio-group'

const meta = {
  title: 'Components/UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    options: [
      {
        value: '1',
        label: 'first',
      },
      {
        value: '2',
        label: 'second',
      },
      {
        value: '3',
        label: 'third',
      },
    ],
  },
}
