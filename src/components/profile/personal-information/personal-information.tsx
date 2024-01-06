import { ChangeEvent, useState } from 'react'

import s from './personal-information.module.scss'

import Camera from '@/assets/icons/camera'
import Edit from '@/assets/icons/edit'
import Logout from '@/assets/icons/logout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

type PersonalInformationProps = {
  avatar: string
  name: string
  email: string
  changeName: (newName: string) => void
  changeAvatar: (newAvatar: string) => void
  logout: () => void
}

export const PersonalInformation = ({
  avatar,
  name,
  email,
  changeName,
  changeAvatar,
  logout,
}: PersonalInformationProps) => {
  const [editName, setEditName] = useState(false)
  const [newName, setNewName] = useState(name)

  const onAvatarChanged = () => {
    changeAvatar('newAvatar')
  }

  const onNameChange = () => {
    setEditName(prev => !prev)
    changeName(newName)
  }

  const onLogout = () => {
    logout()
  }

  const onChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value)
  }

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Personal Information
      </Typography>
      <div className={s.photoContainer}>
        <div>
          <img alt={'avatar'} src={avatar} />
          <button className={s.editAvatarButton} onClick={onAvatarChanged}>
            <Camera />
          </button>
        </div>
      </div>
      {editName ? (
        <div>
          <TextField
            name={'name'}
            label={'NickName'}
            containerProps={{ className: s.nameInput }}
            value={newName}
            onChange={onChangeTextField}
          />
          <Button onClick={onNameChange} fullWidth>
            Save Changes
          </Button>
        </div>
      ) : (
        <div>
          <div className={s.nameWithEditButton}>
            <Typography as={'h1'} className={s.name}>
              {name}
            </Typography>
            <button
              className={s.editNameButton}
              onClick={() => {
                setEditName(prev => !prev)
              }}
            >
              <Edit />
            </button>
          </div>
          <Typography variant={'body2'} className={s.email}>
            {email}
          </Typography>
          <div className={s.buttonContainer}>
            <Button variant={'secondary'} onClick={onLogout}>
              <Logout />
              Logout
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}
