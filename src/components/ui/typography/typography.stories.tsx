import { StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  title: 'Components/UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large content',
    disabled: false,
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'h1 content',
    disabled: false,
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'h2 content',
    disabled: false,
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'h3 content',
    disabled: false,
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'body1 content',
    disabled: false,
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'body2 content',
    disabled: false,
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'subtitle1 content',
    disabled: false,
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'subtitle2 content',
    disabled: false,
  },
}
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'caption content',
    disabled: false,
  },
}
export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'overline content',
    disabled: false,
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'link1 content',
    disabled: false,
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'link2 content',
    disabled: false,
  },
}
export const Error: Story = {
  args: {
    variant: 'error',
    children: 'error content',
    disabled: false,
  },
}
