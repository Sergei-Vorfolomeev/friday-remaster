export type GetDecksResponse = {
  items: GetDecksResponseItems[]
  pagination: GetDecksResponsePagination
  maxCardsCount: number
}
export type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}
export type GetDecksResponseItems = {
  author: GetDecksResponseItemsAuthor
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
