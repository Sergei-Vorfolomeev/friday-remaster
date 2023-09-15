import { ChangeEvent, KeyboardEvent, ComponentPropsWithoutRef, useState } from 'react'

import s from './text-field.module.scss'

import { EyeIcon } from '@/common/components/eye-icon'
import { SearchIcon } from '@/common/icons/search-icon'

type TextFieldProps = {
  variant?: 'input' | 'inputWithIcon' | 'search'
  label: string
  placeholder: string
  disabled: boolean
  className?: string
  onEnter: () => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  variant = 'input',
  label,
  placeholder,
  disabled,
  className,
  onEnter,
}: TextFieldProps) => {
  const [text, setText] = useState('')
  const [error] = useState('')
  const [isHidden, setIsHidden] = useState<boolean>(true)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }

  const handleOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnter()
    }
  }

  const handleOnEyeClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <div className={s.inputContainer}>
      <label htmlFor={'input'} className={s.label}>
        {label}
      </label>
      <input
        type={'text'}
        name={'input'}
        value={text}
        className={`${error ? s.error : s.default} ${className} ${s[variant]}`}
        placeholder={error ? error : placeholder}
        disabled={disabled}
        onChange={handleOnChange}
        onKeyDown={handleOnEnter}
      />
      {variant === 'inputWithIcon' && <EyeIcon isHidden={isHidden} onClick={handleOnEyeClick} />}
      {variant === 'search' && <SearchIcon className={s.searchIcon} />}
    </div>
  )
}
