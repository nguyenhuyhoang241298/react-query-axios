import ScreenLayout from '@/components/screen-layout'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  return <ScreenLayout>{children}</ScreenLayout>
}
