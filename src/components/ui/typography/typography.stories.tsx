import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body-1',
        'body-2',
        'subtitle-1',
        'subtitle-2',
        'caption',
        'overline',
        'link-1',
        'link-2',
      ],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Large: Story = {
  args: {
    as: 'h1',
    variant: 'large',
    children: 'Example',
  },
}

export const H1: Story = {
  args: {
    as: 'h1',
    variant: 'h1',
    children: 'Example',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    variant: 'h2',
    children: 'Example',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    variant: 'h3',
    children: 'Example',
  },
}

export const Body1: Story = {
  args: {
    as: 'span',
    variant: 'body-1',
    children: 'Example',
  },
}

export const Body2: Story = {
  args: {
    as: 'span',
    variant: 'body-2',
    children: 'Example',
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'span',
    variant: 'subtitle-1',
    children: 'Example',
  },
}

export const Subtitle2: Story = {
  args: {
    as: 'span',
    variant: 'subtitle-2',
    children: 'Example',
  },
}

export const Caption: Story = {
  args: {
    as: 'span',
    variant: 'caption',
    children: 'Example',
  },
}

export const Overline: Story = {
  args: {
    as: 'span',
    variant: 'overline',
    children: 'Example',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    variant: 'link-1',
    children: 'Example',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    variant: 'link-2',
    children: 'Example',
  },
}
