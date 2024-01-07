import { ComponentProps, ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

import { Typography } from '@/components/ui/typography'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(s.table, className),
    }

    return <table {...rest} ref={ref} className={classNames.table}></table>
  }
)

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref}></thead>
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref}></tbody>
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref}></tr>
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, children, ...rest }, ref) => {
    const classNames = {
      headCell: clsx(s.headCell, className),
    }

    return (
      <th {...rest} ref={ref} className={classNames.headCell}>
        <span>{children}</span>
      </th>
    )
  }
)

export const TableCell = forwardRef<HTMLTableDataCellElement, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(s.cell, className),
    }

    return <td {...rest} className={classNames.cell} ref={ref}></td>
  }
)

export const TableEmpty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = {
    empty: clsx(s.empty, className),
  }

  return (
    <Typography
      variant={'h2'}
      className={classNames.empty}
      style={{ marginTop: mt, marginBottom: mb }}
    >
      Пока тут еще нет данных! :(
    </Typography>
  )
}
