import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/components'
import { useGetDecksQuery } from '@/services/baseApi'

export const Decks = () => {
  const { data, isLoading, isError } = useGetDecksQuery()

  if (isLoading) {
    return <div>LOADING...</div>
  }

  return (
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
  )
}
