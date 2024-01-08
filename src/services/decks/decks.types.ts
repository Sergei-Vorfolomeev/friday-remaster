export type GetDecksResponse = {
  items: GetDeckResponseItems[]
  pagination: GetDecksResponsePagination
  maxCardsCount: number
}
export type GetDeckResponseItemsAuthor = {
  id: string
  name: string
}
export type GetDeckResponseItems = {
  author: GetDeckResponseItemsAuthor
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
export type GetDecksRequestArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: number
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}
export type GetDeckByIdRequestArgs = {
  id: string
}
