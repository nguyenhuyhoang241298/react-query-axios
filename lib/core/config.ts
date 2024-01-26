import { DefaultOptions } from '@tanstack/react-query'

export const GET_METHOD_TIME_OUT = 35000

export const DEFAULT_QUERY_OPTIONS: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  },
}
