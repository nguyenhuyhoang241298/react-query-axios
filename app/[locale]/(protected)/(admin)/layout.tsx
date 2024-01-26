import LocaleSwitcher from '@/components/locale-switch'
import Logo from '@/components/logo'
import Sidebar from '@/components/sidebar/sidebar'
import { ThemeSwitch } from '@/components/theme-switch'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-16 items-center justify-between border-b p-5">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <ThemeSwitch />
          <LocaleSwitcher />
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="h-[calc(100vh-64px)] border-r">
          <Sidebar />
        </div>
        <ScrollArea className="col-span-5 h-[calc(100vh-64px)] p-6">
          {children}
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
      </div>
    </>
  )
}
