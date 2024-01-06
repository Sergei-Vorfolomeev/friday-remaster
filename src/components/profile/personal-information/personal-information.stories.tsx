import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/Personal information',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar:
      'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg',
    email: 'your_email@domain.com',
    name: 'Sergey',
    changeAvatar: () => {
      console.info('avatar changed')
    },
    logout: () => {
      console.info('logout')
    },
    changeName: () => {
      console.info('name changed')
    },
  },
}
