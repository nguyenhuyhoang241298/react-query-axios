'use client'

import { getPosts } from '@/lib/core/api/demo-api'
import { useQuery } from '@tanstack/react-query'
import DefaultLoading from '../../loading'

const Page = () => {
  const postsQuery = useQuery({
    queryKey: ['getPosts'],
    queryFn: getPosts,
  })

  if (postsQuery.isLoading || postsQuery.isError) return <DefaultLoading />

  return <div>Your data is in console</div>
}

export default Page
