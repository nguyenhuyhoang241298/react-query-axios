'use client'

import { getPosts } from '@/lib/core/api/demo-api'
import { useQuery } from '@tanstack/react-query'
import DefaultLoading from '../../loading'
import { columns } from './columns'
import { DataTable } from './data-table'

const Page = () => {
  const postsQuery = useQuery({
    queryKey: ['getPosts'],
    queryFn: getPosts,
  })

  if (postsQuery.isLoading || postsQuery.isError) return <DefaultLoading />

  return <DataTable columns={columns} data={postsQuery.data} />
}

export default Page
