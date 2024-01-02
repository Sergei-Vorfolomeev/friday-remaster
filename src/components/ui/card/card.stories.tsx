import { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/UI/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    children: <Typography variant={'large'}>Card</Typography>,
    style: {
      height: '300px',
      padding: '24px',
      width: '300px',
    },
  },
}
