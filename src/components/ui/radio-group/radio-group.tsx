import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui'

type RadioGroupProps = {
  options: string[]
  disabled: boolean
}

export const RadioGroup = ({ options, disabled = false }: RadioGroupProps) => {
  const classNames = {
    root: s.root,
    item: clsx(s.item, disabled && s.disabled),
    indicator: clsx(s.indicator, disabled && s.disabled),
    label: s.label,
    indicatorBox: clsx(s.indicatorBox, disabled && s.disabled),
    itemBox: s.itemBox,
  }

  return (
    <form>
      <RadioGroupRadix.Root
        className={classNames.root}
        defaultValue="default"
        aria-label="View density"
      >
        {options.map((el, index) => {
          return (
            <div key={index} className={classNames.itemBox}>
              <div className={classNames.indicatorBox}>
                <RadioGroupRadix.Item className={classNames.item} value={el} id={el}>
                  <RadioGroupRadix.Indicator className={classNames.indicator} />
                </RadioGroupRadix.Item>
              </div>
              <Typography as={'label'} variant={'body-2'} className={classNames.label} htmlFor={el}>
                {el}
              </Typography>
            </div>
          )
        })}
        {/*<div>*/}
        {/*  <RadioGroupRadix.Item className={classNames.item} value="default" id="r1">*/}
        {/*    <RadioGroupRadix.Indicator className={classNames.indicator} />*/}
        {/*  </RadioGroupRadix.Item>*/}
        {/*  <label className="Label" htmlFor="r1">*/}
        {/*    Default*/}
        {/*  </label>*/}
        {/*</div>*/}
        {/*<div style={{ display: 'flex', alignItems: 'center' }}>*/}
        {/*  <RadioGroupRadix.Item className="RadioGroupItem" value="comfortable" id="r2">*/}
        {/*    <RadioGroupRadix.Indicator className={s.indicator} />*/}
        {/*  </RadioGroupRadix.Item>*/}
        {/*  <label className="Label" htmlFor="r2">*/}
        {/*    Comfortable*/}
        {/*  </label>*/}
        {/*</div>*/}
        {/*<div style={{ display: 'flex', alignItems: 'center' }}>*/}
        {/*  <RadioGroupRadix.Item className="RadioGroupItem" value="compact" id="r3">*/}
        {/*    <RadioGroupRadix.Indicator className={s.indicator} />*/}
        {/*  </RadioGroupRadix.Item>*/}
        {/*  <label className="Label" htmlFor="r3">*/}
        {/*    Compact*/}
        {/*  </label>*/}
        {/*</div>*/}
      </RadioGroupRadix.Root>
    </form>
  )
}
