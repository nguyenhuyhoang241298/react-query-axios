'use client'

import { ColumnDef } from '@tanstack/react-table'

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'userId',
    header: 'userId',
  },
  {
    accessorKey: 'title',
    header: 'title',
  },
  {
    accessorKey: 'body',
    header: 'body',
  },
]
