import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  GetDeckByIdRequestArgs,
  GetDeckResponseItems,
  GetDecksRequestArgs,
  GetDecksResponse,
} from '@/services/decks/decks.types'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => headers.append('x-auth-skip', 'true'),
  }),
  endpoints: builder => ({
    getDecks: builder.query<GetDecksResponse, GetDecksRequestArgs | void>({
      query: args => ({
        url: '/v1/decks',
        params: args ?? {},
      }),
    }),
    getDeckById: builder.query<GetDeckResponseItems, GetDeckByIdRequestArgs>({
      query: ({ id }) => ({ url: `/v1/decks/${id}` }),
    }),
  }),
})

export const { useGetDecksQuery, useGetDeckByIdQuery } = baseApi
