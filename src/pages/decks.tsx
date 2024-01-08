import { useState } from 'react'

import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Typography,
} from '@/components'
import { useGetDeckByIdQuery, useGetDecksQuery } from '@/services/baseApi'

export const Decks = () => {
  const [currentPage, setCurrenPage] = useState(1)
  const { data, isLoading, error } = useGetDecksQuery({ currentPage, itemsPerPage: 7 })
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: 'clr1tdw2w04hozk2vhoif49cb' })

  console.log(deckByIdData)

  if (isLoading) {
    return <div>LOADING...</div>
  }

  if (error) {
    return (
      <Card>
        <Typography as={'h1'}>SOME ERROR HAS OCCURRED...</Typography>
      </Card>
    )
  }

  const pagination = Array.from({ length: data?.pagination.totalPages ?? 0 }, (el, i) => i + 1)

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created By</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(deck => {
            return (
              <TableRow key={deck?.id}>
                <TableCell>{deck?.name}</TableCell>
                <TableCell>{deck?.cardsCount}</TableCell>
                <TableCell>{new Date(deck?.updated).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>{deck?.author.name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {pagination.map(el => {
        return (
          <Button key={el} onClick={() => setCurrenPage(el)} style={{ margin: '4px' }}>
            {el}
          </Button>
        )
      })}
    </div>
  )
}
